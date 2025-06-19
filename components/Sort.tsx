import { theme } from "@/theme";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StyleSheet, TouchableOpacity, View } from "react-native";

type SortProps = {
  onSelect: () => void;
};

export const Sort = ({ onSelect }: SortProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onSelect}>
          <FontAwesome name="sort" size={18} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 12,
  },
  button: {
    padding: 14,
    backgroundColor: theme.colorGreen,
    borderRadius: 6,
  },
});
