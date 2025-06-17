import PrescriptionDetails from "@/components/PrescriptionDetails";
import { useStore } from "@/store/store";
import { theme } from "@/theme";

import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Prescription() {
  const params = useLocalSearchParams();
  const prescriptionId = params.prescriptionId;
  const prescription = useStore((state) =>
    state.prescriptions.find(
      (prescription) => prescription.id === prescriptionId
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
      <PrescriptionDetails prescription={prescription} />
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
});
