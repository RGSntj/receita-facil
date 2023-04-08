import { useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Image,
  Modal,
  Share,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

import { Entypo, AntDesign, Feather } from "@expo/vector-icons";

// components
import { FoodsProps } from "../components/FoodList";
import { Ingredients } from "../components/Ingredients";
import { Instructions } from "../components/Instructions";
import { VideoView } from "../components/Video";

interface Params {
  data: FoodsProps;
}

export function Detail() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const route = useRoute();
  const navigation = useNavigation();

  const { data } = route.params as Params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: data.name ? data.name : "Detalhes da receita",
      headerRight: () => (
        <Pressable>
          <Entypo name="heart" size={28} color="#ff4141" />
        </Pressable>
      ),
    });
  }, [data.id]);

  function handleOpenModal() {
    setIsOpenModal(true);
  }

  async function handleShareReceipe() {
    try {
      await Share.share({
        url: "http://google.com",
        message: `Receita: ${data.name}\n${data.total_ingredients}`,
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1 pt-2 px-3 pb-3"
      contentContainerStyle={{ paddingBottom: 14 }}
    >
      <Pressable onPress={handleOpenModal}>
        <View className="absolute bottom-0 left-0 right-0 top-0 z-10 items-center justify-center">
          <AntDesign name="playcircleo" size={44} color="#fafafa" />
        </View>
        <Image
          source={{ uri: data.cover }}
          resizeMode="contain"
          className="h-52 rounded-lg w-full"
        />
      </Pressable>

      <View className="flex-row items-center justify-between mb-3">
        <View>
          <Text className="font-bold text-xl mt-3 mb-2 color-dark">
            {data.name}
          </Text>
          <Text className="mb-4 text-lg">
            ingredientes ({data.total_ingredients})
          </Text>
        </View>
        <Pressable onPress={handleShareReceipe}>
          <Feather name="share-2" size={28} color="#121212" />
        </Pressable>
      </View>

      {data.ingredients.map((item) => {
        return <Ingredients key={item.id} data={item} />;
      })}

      <View className="bg-logo flex-row justify-between items-center p-3 rounded-md mb-3">
        <Text className="font-bold color-white text-lg">Modo de preparo</Text>
        <Feather name="arrow-down" size={24} color="#fff" />
      </View>

      {data.instructions.map((item, index) => {
        return <Instructions key={item.id} text={item.text} index={index} />;
      })}

      <Modal visible={isOpenModal} animationType="slide">
        <VideoView
          handleClose={() => setIsOpenModal(false)}
          videoUrl={data.video}
        />
      </Modal>
    </ScrollView>
  );
}
