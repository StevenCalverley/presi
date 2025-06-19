import { useStore } from "@/store/store";
import { theme } from "@/theme";
import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Button } from "./Button";

export default function SearchBar() {
  const [value, setValue] = useState<string>();

  const filter = useStore((state) => state.filter);
  const reset = useStore((state) => state.reset);

  const handleSubmit = () => {
    if (value) {
      filter(value);
    }
  };

  const handleReset = () => {
    setValue(undefined);
    reset();
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        style={styles.textInput}
        onChangeText={setValue}
        placeholder="E.g Prescription"
        onSubmitEditing={handleSubmit}
        returnKeyType="done"
      />
      {value && <Button title="Clear" onPress={handleReset} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    margin: 12,
  },
  textInput: {
    flex: 1,
    borderColor: theme.colorLightGrey,
    borderWidth: 2,
    padding: 12,
    fontSize: 14,
    borderRadius: 6,
    marginHorizontal: 12,
    backgroundColor: theme.colorWhite,
  },
});
