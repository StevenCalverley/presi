import { ParsedPrescription } from "@/store/store";
import { theme } from "@/theme";
import { format } from "date-fns";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

function statusColor(status: string) {
  switch (status) {
    case "active":
      return {
        color: theme.colorGreen,
        backgroundColor: "#deeede",
      };

    case "expired":
      return {
        color: theme.colorRed,
        backgroundColor: "#f8d0d8",
      };

    default:
      return {
        color: theme.colorGrey,
        backgroundColor: "#DCDCDC",
      };
  }
}

type PrescriptionCardProps = {
  prescription: ParsedPrescription;
};

export function PrescriptionCard({ prescription }: PrescriptionCardProps) {
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
          <Text style={styles.prescribeDate}>
            {format(prescription.parsedDatePrescribed, "dd MMM yy")}
          </Text>
        </View>
        <View>
          <Text style={[statusColor(prescription.status), styles.status]}>
            {prescription.status}
          </Text>
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
    padding: 6,
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
    flex: 1,
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
  status: {
    textTransform: "capitalize",
    textAlign: "center",
    borderRadius: 6,
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
  prescribeDate: {
    color: theme.colorGrey,
    fontSize: 12,
  },
});
