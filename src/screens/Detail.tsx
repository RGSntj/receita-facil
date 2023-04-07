import { useLayoutEffect } from "react";
import { View, Text, Pressable } from "react-native";

import { Entypo } from "@expo/vector-icons";

import { useRoute, useNavigation } from "@react-navigation/native";

interface Params {
  name: string;
}

export function Detail() {
  const route = useRoute();
  const navigation = useNavigation();

  const { name } = route.params as Params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: name ? name : "Detalhes da receita",
      headerRight: () => (
        <Pressable>
          <Entypo name="heart" size={28} color="#ff4141" />
        </Pressable>
      ),
    });
  }, [name]);

  return (
    <View>
      <Text>DETAIL SCREEN {name}</Text>
    </View>
  );
}
