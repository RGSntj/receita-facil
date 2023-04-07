import { View, Text, TouchableOpacity, Image } from "react-native";

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
      <View className="absolute bottom-4 left-4 z-full">
        <Text className="text-lg font-bold color-white">{data.name}</Text>
        <Text className="color-white">
          {data.total_ingredients} ingredientes | {data.time} min
        </Text>
      </View>
    </TouchableOpacity>
  );
}
