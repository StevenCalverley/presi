import { useStore } from "@/store/store";
import { theme } from "@/theme";
import { format, parseISO } from "date-fns";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function PlantDetails() {
  const params = useLocalSearchParams();
  const prescriptionId = params.prescriptionId;
  const prescription = useStore((state) =>
    state.prescriptions.find(
      (prescription) => String(prescription.id) === prescriptionId
    )
  );
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: prescription?.patient,
    });
  }, [prescription?.patient, navigation]);

  if (!prescription) {
    return (
      <View style={styles.notFoundContainer}>
        <Text style={styles.notFoundText}>
          Prescription with ID {prescriptionId} not found
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.detailsContainer}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  notFoundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
  },
  notFoundText: {
    fontSize: 18,
  },
  detailsContainer: {
    padding: 12,
    backgroundColor: theme.colorWhite,
    flex: 1,
    justifyContent: "flex-start",
  },
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
