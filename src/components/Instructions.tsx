import { View, Text } from "react-native";

interface Props {
  text: string;
  index: number;
}

export function Instructions({ text, index }: Props) {
  return (
    <View className="p-2 flex-row mb-3 items-center">
      <Text className="font-bold text-lg">{index + 1}-</Text>
      <Text className="leading-5">{text}</Text>
    </View>
  );
}
