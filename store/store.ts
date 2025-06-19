import Data from "@/data/prescriptions.json";
import { create } from "zustand";

export type Prescription = {
  id: string;
  patient: string;
  medication: string;
  prescriber: string;
  datePrescribed: string;
  status: string;
  pharmacy: string;
};

type PrescriptionState = {
  prescriptions: Prescription[];
  reset: () => void;
  prescriptionsBy: (status: string) => void;
  filter: (value: string) => void;
};

export const useStore = create<PrescriptionState>((set) => ({
  prescriptions: Data,
  reset: () => {
    return set((state) => ({ ...state, prescriptions: Data }));
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
}));
