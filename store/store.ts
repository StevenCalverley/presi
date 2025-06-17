import Data from "@/data/prescriptions.json";
import { create } from "zustand";
import { persist } from "zustand/middleware";

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
};

export const useStore = create(
  persist<PrescriptionState>(
    () => ({
      prescriptions: Data,
    }),
    {
      name: "prescriptions-store",
    }
  )
);
