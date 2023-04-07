import { useLayoutEffect } from "react";
import { View, Text } from "react-native";

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
    });
  }, [name]);

  return (
    <View>
      <Text>DETAIL SCREEN {name}</Text>
    </View>
  );
}
