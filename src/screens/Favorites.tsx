import { useState, useEffect } from "react";
import { SafeAreaView, Text, FlatList } from "react-native";
import { useIsFocused } from "@react-navigation/native";

import { getFavorites } from "../utils/storage";
import { FoodList, FoodsProps } from "../components/FoodList";

export function Favorites() {
  const [receipes, setReceipes] = useState<FoodsProps[]>([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    let isActive = true;

    async function getReceipes() {
      const result = await getFavorites("@appreceitas");
      if (isActive) {
        setReceipes(result);
      }
    }

    if (isActive) {
      getReceipes();
    }

    return () => {
      isActive = false;
    };
  }, [isFocused]);

  return (
    <SafeAreaView className="flex-1 px-2 py-6">
      <Text className="color-black font-bold text-2xl mb-2">
        Receitas Favoritas
      </Text>

      {receipes.length === 0 && (
        <Text className="font-medium text-lg justify-center">
          Você ainda não tem nenhuma receita salva.
        </Text>
      )}

      <FlatList
        showsVerticalScrollIndicator={false}
        data={receipes}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <FoodList data={item} />}
      />
    </SafeAreaView>
  );
}
