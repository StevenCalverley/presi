import { PrescriptionCard } from "@/components/PrescriptionCard";
import SearchBar from "@/components/SearchBar";
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
        <View style={[styles.container, styles.headerContainer]}>
          <View style={styles.headerContainer}>
            <SearchBar />
          </View>
          <View>
            <StatusDropdown
              data={["Active", "Expired", "Pending"]}
              onSelect={handleSelect}
            />
          </View>
        </View>
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
    padding: 6,
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",
  },
  listEmptyContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 18,
  },
});
