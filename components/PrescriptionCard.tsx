import { Prescription } from "@/store/store";
import { theme } from "@/theme";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export function PrescriptionCard({
  prescription,
}: {
  prescription: Prescription;
}) {
  return (
    <Link
      href={{
        pathname: "/prescription/[prescriptionId]",
        params: {
          prescriptionId: prescription.id,
        },
      }}
      asChild
    >
      <Pressable style={styles.prescriptionCard}>
        <View style={styles.details}>
          <Text numberOfLines={1} style={styles.prescriptionName}>
            {prescription.patient}
          </Text>
          <Text style={styles.subtitle}>{prescription.medication}</Text>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  prescriptionCard: {
    flexDirection: "row",
    shadowColor: theme.colorBlack,
    backgroundColor: theme.colorWhite,
    borderRadius: 6,
    padding: 12,
    marginBottom: 12,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  details: {
    padding: 14,
    justifyContent: "center",
  },
  prescriptionName: {
    fontSize: 18,
    marginBottom: 4,
  },
  subtitle: {
    color: theme.colorGrey,
  },
});
