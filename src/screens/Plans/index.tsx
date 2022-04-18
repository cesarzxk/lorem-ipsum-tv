import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FontAwesome5 } from "@expo/vector-icons";

import { styles } from "./styles.native";
import { useGlobal } from "../../contexts/GlobalContext";
import PlanCard from "../../components/PlanCard";
import NextButton from "../../components/NextButton";
import FiltesModal from "../../components/ModalFilters";

type RootStackParamList = {
  plans: undefined;
  planmap: undefined;
  main: undefined;
  adress: undefined;
};

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "plans"
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

export default function Plans({ navigation }: Props) {
  const { plans, clearPlans } = useGlobal();
  const [modalIsVisible, setModalIsVisible] = useState(false);

  return (
    <>
      <FiltesModal
        isVisible={modalIsVisible}
        setIsVisible={setModalIsVisible}
      />

      <View style={styles.container}>
        <View style={styles.headerRight} />
        <View style={styles.headerLeft} />

        <TouchableOpacity
          onPress={() => {
            setModalIsVisible(true);
          }}
          style={styles.filterButtom}
        >
          <FontAwesome5
            style={styles.filterButtomIcon}
            name="filter"
            size={24}
            color="black"
          />
        </TouchableOpacity>

        <Text style={styles.title}>Pacotes disponiveis</Text>

        <FlatList
          style={styles.flatlist}
          data={plans}
          renderItem={({ item }) => <PlanCard key={item.id} props={item} />}
          keyExtractor={(item) => item.id.toString()}
        />

        <View style={styles.buttonContainer}>
          <NextButton
            onPress={() => {
              clearPlans();
              navigation.goBack();
            }}
            title="Voltar"
          />
        </View>
      </View>
    </>
  );
}
