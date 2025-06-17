import { PrescriptionCard } from "@/components/PrescriptionCard";
import { useStore } from "@/store/store";
import { theme } from "@/theme";
import { FlatList, StyleSheet } from "react-native";

export default function App() {
  const prescriptions = useStore((state) => state.prescriptions);

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={prescriptions}
      renderItem={({ item }) => <PrescriptionCard prescription={item} />}
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
