import { PrescriptionCard } from "@/components/PrescriptionCard";
import SearchBar from "@/components/SearchBar";
import { useStore } from "@/store/store";
import { theme } from "@/theme";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function App() {
  const prescriptions = useStore((state) => state.prescriptions);

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
      ListHeaderComponent={<SearchBar />}
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
  listEmptyContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 18,
  },
});
