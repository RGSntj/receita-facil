import { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";

import { useRoute } from "@react-navigation/native";
import { api } from "../services/api";
import { FoodList, FoodsProps } from "../components/FoodList";

interface Params {
  name: string;
}

export function Search() {
  const [receipes, setReceipes] = useState<FoodsProps[]>([]);

  const route = useRoute();
  const { name } = route.params as Params;

  useEffect(() => {
    async function fetchReceipes() {
      const response = await api.get(`/foods?name_like=${name}`);
      setReceipes(response.data);
    }

    fetchReceipes();
  }, [name]);

  return (
    <View className="flex-1 bg-background pt-2 px-2 pb-2">
      <FlatList
        data={receipes}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <FoodList data={item} />}
        ListEmptyComponent={() => (
          <Text className="color-white font-bold text-xl">
            Não encotramos o que está buscando...
          </Text>
        )}
      />
    </View>
  );
}
