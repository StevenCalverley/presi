import { theme } from "@/theme";
import * as Haptics from "expo-haptics";
import { Platform, Pressable, StyleSheet, Text } from "react-native";
type Props = {
  title: string;
  onPress: () => void;
};

export function Button({ title, onPress }: Props) {
  const handlePressed = () => {
    if (Platform.OS !== "web") {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    onPress();
  };

  return (
    <Pressable
      onPress={handlePressed}
      style={(state) => {
        if (state.pressed) {
          return [styles.button, styles.buttonPressed];
        }
        return styles.button;
      }}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 14,
    borderRadius: 6,
    backgroundColor: theme.colorRed,
  },
  buttonText: {
    color: theme.colorWhite,
    textAlign: "center",
  },
  buttonPressed: {
    backgroundColor: theme.colorLightGrey,
  },
});
