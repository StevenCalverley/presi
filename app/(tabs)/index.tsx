import { PrescriptionCard } from "@/components/PrescriptionCard";
import { StatusDropdown } from "@/components/StatusDropdown";
import { useStore } from "@/store/store";
import { theme } from "@/theme";
import { FlatList, StyleSheet, Text, View } from "react-native";

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
      ListEmptyComponent={
        <View style={styles.listEmptyContainer}>
          <Text>Your prescription list is empty</Text>
        </View>
      }
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
  listEmptyContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 18,
  },
});
