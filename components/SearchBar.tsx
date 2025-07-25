import { useStore } from "@/store/store";
import { theme } from "@/theme";
import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Button } from "./Button";
import { Sort } from "./Sort";
import { StatusDropdown } from "./StatusDropdown";

export default function SearchBar() {
  const [value, setValue] = useState<string>();
  const [isSorted, setIsSorted] = useState(false); //TODO: move this logic to the store

  const prescriptionsBy = useStore((state) => state.prescriptionsBy);
  const filter = useStore((state) => state.filter);
  const sort = useStore((state) => state.sort);
  const reset = useStore((state) => state.reset);

  const handleSubmit = () => {
    if (value) {
      filter(value);
    }
  };

  const handleSelect = (status: string) => {
    if (status) {
      prescriptionsBy(status.toLowerCase());
    }
  };

  const handleSort = () => {
    setIsSorted((prevIsSorted) => !prevIsSorted);
    sort(!isSorted);
  };

  const handleClear = () => {
    setValue(undefined);
    setIsSorted(false);
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
      <StatusDropdown
        data={["Active", "Expired", "Pending"]}
        onSelect={handleSelect}
      />
      <Sort onSelect={handleSort} />
      <Button title="Clear" onPress={handleClear} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    margin: 12,
    gap: 4,
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
