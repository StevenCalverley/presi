import { theme } from "@/theme";
import AntDesign from "@expo/vector-icons/AntDesign";
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

  const toggleModal = () => setModalVisible(!isModalVisible);

  const handleSelect = (item: string) => {
    onSelect(item);
    toggleModal();
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={toggleModal}>
          <AntDesign name="search1" size={18} color="white" />
        </TouchableOpacity>
      </View>

      <Modal visible={isModalVisible} transparent animationType="fade">
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalHeaderText}>
                Filter by Prescription Status
              </Text>
            </View>
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
            <View style={styles.modalFooter}>
              <Button title="Close" onPress={toggleModal} />
            </View>
          </View>
        </View>
      </Modal>
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
  modalHeader: {
    margin: 12,
  },
  modalHeaderText: {
    fontSize: 18,
    fontWeight: "700",
  },
  option: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  optionText: {
    fontSize: 16,
  },
  modalFooter: {
    margin: 12,
  },
});
