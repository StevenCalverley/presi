import { Prescription } from "@/store/store";
import { theme } from "@/theme";
import { format, parseISO } from "date-fns";
import { StyleSheet, Text, View } from "react-native";

type PrescriptionDetailsProps = {
  prescription: Prescription;
};
export default function PrescriptionDetails({
  prescription,
}: PrescriptionDetailsProps) {
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={styles.prescriptionName}>{prescription.medication}</Text>
      <Text style={styles.prescriptionStatus}>{prescription.status}</Text>
      <View style={styles.spacer} />
      <Text style={styles.prescriptionPrescriber}>
        Prescribed by: {prescription.prescriber}
      </Text>
      <Text style={styles.prescriptionPrescribeDate}>
        Date Prescribed:{" "}
        {format(parseISO(prescription.datePrescribed), "dd / MM / yyyy")}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  spacer: {
    height: 18,
  },
  prescriptionName: {
    fontSize: 18,
    fontWeight: "800",
  },
  prescriptionStatus: {
    color: theme.colorGrey,
    textTransform: "capitalize",
    fontSize: 18,
  },
  prescriptionPrescriber: {
    color: theme.colorBlack,
  },
  prescriptionPrescribeDate: {
    color: theme.colorGrey,
  },
});
