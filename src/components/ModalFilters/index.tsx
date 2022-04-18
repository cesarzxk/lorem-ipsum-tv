import {
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Text, TouchableOpacity, View, Modal } from "react-native";

import { useGlobal } from "../../contexts/GlobalContext";
import { styles } from "./styles.native";

type propsModal = {
  setIsVisible: (isVisible: boolean) => void;
  isVisible: boolean;
};

export default function FiltesModal({ isVisible, setIsVisible }: propsModal) {
  const { orderByPrice, orderByDistance } = useGlobal();

  return (
    <Modal transparent={true} animationType="slide" visible={isVisible}>
      <View style={styles.fade}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.closeButtom}
            onPress={() => setIsVisible(false)}
          >
            <AntDesign name="closecircleo" size={34} color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>Filters</Text>
          <Text style={styles.filtersTitle}>Distância</Text>
          <View style={styles.filters}>
            <TouchableOpacity
              onPress={() => {
                orderByDistance(true);
              }}
              style={styles.filterButtom}
            >
              <MaterialCommunityIcons
                style={styles.filterButtomIcon}
                name="map-marker-distance"
                size={44}
                color="black"
              />

              <Text style={styles.filterButtomText}>Menor</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                orderByDistance(false);
              }}
              style={styles.filterButtom}
            >
              <MaterialCommunityIcons
                style={[
                  styles.filterButtomIcon,
                  { transform: [{ scaleX: -1 }] },
                ]}
                name="map-marker-distance"
                size={44}
                color="black"
              />

              <Text style={styles.filterButtomText}>Maior</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.filtersTitle}>Preço</Text>
          <View style={styles.filters}>
            <TouchableOpacity
              onPress={() => {
                orderByPrice(true);
              }}
              style={styles.filterButtom}
            >
              <FontAwesome5
                style={styles.filterButtomIcon}
                name="balance-scale-right"
                size={34}
                color="black"
              />
              <Text style={styles.filterButtomText}>Menor</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                orderByPrice(false);
              }}
              style={styles.filterButtom}
            >
              <FontAwesome5
                style={styles.filterButtomIcon}
                name="balance-scale-left"
                size={34}
                color="black"
              />
              <Text style={styles.filterButtomText}>Maior</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
