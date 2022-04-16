import { Text, TouchableOpacity, View, ViewBase } from "react-native";
import { styles } from "./styles.native";

type NextButtonTypes = {
  onPress: () => void;
  title: string;
  enabled?: boolean;
};

export default function NextButton({
  enabled = true,
  onPress,
  title,
}: NextButtonTypes) {
  return enabled ? (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  ) : (
    <View style={[styles.button, { backgroundColor: "#444" }]}>
      <Text style={styles.buttonText}>{title.toUpperCase()}</Text>
    </View>
  );
}
