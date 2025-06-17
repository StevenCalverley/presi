import { useStore } from "@/store/store";
import { theme } from "@/theme";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const fullDateFormat = "LLL d yyyy, h:mm aaa";

export default function PlantDetails() {
  const router = useRouter();

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
      title: prescription?.medication,
    });
  }, [prescription?.medication, navigation]);

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
        <View style={styles.spacer} />
        <Text style={styles.key}>Water me every</Text>
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
    justifyContent: "center",
  },
  key: {
    marginRight: 8,
    fontSize: 16,
    color: theme.colorBlack,
    textAlign: "center",
  },
  value: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: theme.colorGreen,
  },
  deleteButton: {
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteButtonText: {
    color: theme.colorGrey,
    fontWeight: "bold",
  },
  spacer: {
    height: 18,
  },
});
