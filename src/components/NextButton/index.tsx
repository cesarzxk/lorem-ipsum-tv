import { Text, TouchableOpacity, View, ViewBase } from "react-native";
import { styles } from "./styles.native";
import { ActivityIndicator, Colors } from "react-native-paper";

type NextButtonTypes = {
  onPress: () => void;
  title: string;
  enabled?: boolean;
  isLoading?: boolean;
};

export default function NextButton({
  enabled = true,
  onPress,
  title,
  isLoading = false,
}: NextButtonTypes) {
  return enabled ? (
    isLoading ? (
      <TouchableOpacity style={styles.button}>
        <ActivityIndicator animating={true} color={Colors.blue300} />
      </TouchableOpacity>
    ) : (
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>{title.toUpperCase()}</Text>
      </TouchableOpacity>
    )
  ) : (
    <View style={[styles.button, { backgroundColor: "#444" }]}>
      <Text style={styles.buttonText}>{title.toUpperCase()}</Text>
    </View>
  );
}
