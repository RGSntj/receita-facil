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
      <View>
        <Text>Strogonoff</Text>
        <Text>10 ingredientes | 60 min</Text>
      </View>
    </TouchableOpacity>
  );
}
