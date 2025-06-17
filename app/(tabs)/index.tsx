import { PrescriptionCard } from "@/components/PrescriptionCard";
import { StatusDropdown } from "@/components/StatusDropdown";
import { useStore } from "@/store/store";
import { theme } from "@/theme";
import { FlatList, StyleSheet } from "react-native";

export default function App() {
  const prescriptions = useStore((state) => state.prescriptions);
  const prescriptionsBy = useStore((state) => state.prescriptionsBy);

  const handleSelect = (status: string) => {
    if (status) {
      prescriptionsBy(status.toLowerCase());
    }
  };

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={prescriptions}
      renderItem={({ item }) => <PrescriptionCard prescription={item} />}
      ListHeaderComponent={
        <StatusDropdown
          data={["Active", "Expired", "Pending"]}
          onSelect={handleSelect}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
  },
  contentContainer: {
    padding: 12,
  },
});
