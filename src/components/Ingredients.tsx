import { View, Text } from "react-native";

interface IngredientsProps {
  name: string;
  amount: string;
}

interface Props {
  data: IngredientsProps;
}

export function Ingredients({ data }: Props) {
  return (
    <View className="flex-row mb-3 justify-between items-center rounded-sm p-2">
      <Text className="font-medium text-base">{data.name}</Text>
      <Text>{data.amount}</Text>
    </View>
  );
}
