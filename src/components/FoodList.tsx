import { View, Text, TouchableOpacity, Image } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
export interface FoodsProps {
  id: string;
  name: string;
  total_ingredients: string;
  cover: string;
  video: string;
  time: number;
}

interface Props {
  data: FoodsProps;
}

export function FoodList({ data }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.6} className="mb-4">
      <Image source={{ uri: data.cover }} className="w-full h-52 rounded-lg" />
      <View className="absolute bottom-4 left-3">
        <Text className="text-lg font-bold color-white">{data.name}</Text>
        <Text className="color-white">
          {data.total_ingredients} ingredientes | {data.time} min
        </Text>
      </View>
      <LinearGradient
        colors={["transparent", "rgba(0,0,0, 0.70)", "rgba(0,0,0, 0.95)"]}
        style={{
          position: "absolute",
          right: 0,
          left: 0,
          bottom: 0,
          width: "55%",
          zIndex: 1,
          backgroundColor: "transparent",
        }}
      />
    </TouchableOpacity>
  );
}
