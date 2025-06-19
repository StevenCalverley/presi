import Data from "@/data/prescriptions.json";
import { isBefore, parseISO } from "date-fns";
import { create } from "zustand";

type Prescription = {
  id: string;
  patient: string;
  medication: string;
  prescriber: string;
  datePrescribed: string;
  status: string;
  pharmacy: string;
};

export type ParsedPrescription = Prescription & { parsedDatePrescribed: Date };

type PrescriptionState = {
  prescriptions: ParsedPrescription[];
  reset: () => void;
  prescriptionsBy: (status: string) => void;
  filter: (value: string) => void;
  sort: (isDesc: boolean) => void;
};

function parseData() {
  return Data.map((prescription) => {
    return {
      ...prescription,
      parsedDatePrescribed: parseISO(prescription.datePrescribed),
    };
  });
}

export const useStore = create<PrescriptionState>((set) => ({
  prescriptions: parseData(),
  reset: () => {
    return set((state) => ({ ...state, prescriptions: parseData() }));
  },
  prescriptionsBy: (status: string) => {
    return set((state) => {
      return {
        ...state,
        prescriptions: state.prescriptions.filter(
          (prescription) => prescription.status === status
        ),
      };
    });
  },
  filter: (value: string) => {
    return set((state) => {
      if (value) {
        return {
          prescriptions: state.prescriptions.filter(
            (prescription) =>
              prescription.medication.startsWith(value) ||
              prescription.patient.startsWith(value)
          ),
        };
      }
      return {
        ...state,
      };
    });
  },
  sort: (isDesc: boolean) => {
    return set((state) => {
      return {
        ...state,
        prescriptions: [...state.prescriptions].sort((a, b) => {
          if (!a.parsedDatePrescribed || !b.parsedDatePrescribed) {
            throw new Error("Prescriptions not parsed)");
          }

          const comparedDates = isBefore(
            a.parsedDatePrescribed,
            b.parsedDatePrescribed
          );

          // TODO: Refactor to sort ASC / DESC functions
          if (isDesc) {
            return comparedDates ? 1 : -1;
          } else {
            return comparedDates ? -1 : 1;
          }
        }),
      };
    });
  },
}));
