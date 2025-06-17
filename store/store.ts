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
  prescriptionsBy: (status: string) => void;
};

export const useStore = create<PrescriptionState>((set) => ({
  prescriptions: Data,
  prescriptionsBy: (status: string) => {
    return set((state) => {
      let prescriptions;

      if (status === "all") {
        prescriptions = Data;
      } else {
        prescriptions = Data.filter(
          (prescription) => prescription.status === status
        );
      }

      return {
        ...state,
        prescriptions,
      };
    });
  },
}));
