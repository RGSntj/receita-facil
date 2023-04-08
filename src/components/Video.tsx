import { SafeAreaView, TouchableOpacity, Text } from "react-native";
import { WebView } from "react-native-webview";
import { Feather } from "@expo/vector-icons";

interface Props {
  handleClose: () => void;
  videoUrl: string;
}

export function VideoView({ handleClose, videoUrl }: Props) {
  return (
    <SafeAreaView className="flex-1 w-full">
      <TouchableOpacity
        className="w-full bg-logo h-16 flex-row items-center pl-4"
        onPress={handleClose}
      >
        <Feather name="arrow-left" size={24} color="#fff" />
        <Text className="font-bold text-lg color-white ml-2">Voltar</Text>
      </TouchableOpacity>

      <WebView className="flex-1" source={{ uri: videoUrl }} />
    </SafeAreaView>
  );
}
