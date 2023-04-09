import { View, ActivityIndicator } from "react-native";

export function Loading() {
  return (
    <View className="flex-1 items-center justify-center">
      <ActivityIndicator size="large" color="#4CBE6C" />
    </View>
  );
}
