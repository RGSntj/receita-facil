import { useState, useEffect } from "react";

import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { Logo } from "../components/Logo";

import { Ionicons } from "@expo/vector-icons";
import { api } from "../services/api";

import { FoodList, FoodsProps } from "../components/FoodList";
import { Loading } from "../components/Loading";

export function Home() {
  const [searchFood, setSearchFood] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [foods, setFoods] = useState<FoodsProps[] | null>([]);

  useEffect(() => {
    async function fetchFoods() {
      try {
        setIsLoading(true);
        const response = await api.get("/foods");
        setFoods(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchFoods();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-background pt-9 px-4 pb-3">
      <Logo />

      <Text className="text-2xl font-bold color-[#0e0e0e]">
        Encontre a receita
      </Text>
      <Text className="text-2xl font-bold color-[#0e0e0e]">
        que combina com você
      </Text>

      <View className="bg-white flex-row items-center justify-between w-full rounded-lg my-3 border border-[#ececec] px-3">
        <TextInput
          placeholderTextColor="#AAAAAA"
          placeholder="digite o nome da comida..."
          className="w-[90%] h-14 max-w-[90%] text-lg"
          value={searchFood}
          onChangeText={setSearchFood}
        />
        <TouchableOpacity activeOpacity={0.5}>
          <Ionicons name="search" size={28} color="#4CBE6C" />
        </TouchableOpacity>
      </View>

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={foods}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <FoodList data={item} />}
        />
      )}
    </SafeAreaView>
  );
}
