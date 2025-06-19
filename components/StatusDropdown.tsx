import { theme } from "@/theme";
import React, { useState } from "react";
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button } from "./Button";

type StatusDropdownProps = {
  data: string[];
  onSelect: (status: string) => void;
};

export const StatusDropdown = ({ data, onSelect }: StatusDropdownProps) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const toggleModal = () => setModalVisible(!isModalVisible);

  const handleSelect = (item: string) => {
    setSelectedValue(item);
    onSelect(item);
    toggleModal();
  };

  const handleClear = () => {
    setSelectedValue(null);
    onSelect("all");
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={toggleModal}>
          <Text style={styles.buttonText}>
            {selectedValue
              ? `Filtered to ${selectedValue}`
              : "Select a status to filter"}
          </Text>
        </TouchableOpacity>

        {selectedValue && <Button title="Clear" onPress={handleClear} />}
      </View>

      <Modal visible={isModalVisible} transparent animationType="fade">
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <FlatList
              data={data}
              keyExtractor={(_item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => handleSelect(item)}
                >
                  <Text style={styles.optionText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <Button title="Close" onPress={toggleModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 12,
  },
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
  buttonText: {
    color: theme.colorWhite,
    textAlign: "center",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    backgroundColor: theme.colorWhite,
    borderRadius: 6,
    padding: 12,
  },
  option: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  optionText: {
    fontSize: 16,
  },
});
