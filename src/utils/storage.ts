import AsyncStorage from "@react-native-async-storage/async-storage";
import { FoodsProps } from "../components/FoodList";

export async function getFavorites(key: string) {
  const favorites = await AsyncStorage.getItem(key);
  // console.log(favorites);
  return JSON.parse(favorites) || [];
}

export async function saveFavorites(key: string, newItem: FoodsProps) {
  let myFavorites: FoodsProps[] = await getFavorites(key);

  let hasItem = myFavorites.some((item) => item.id === newItem.id);
  if (hasItem) {
    console.log("Esse item já está salvo na sua lista");
    return;
  }

  myFavorites.push(newItem);
  await AsyncStorage.setItem(key, JSON.stringify(myFavorites));
  console.log("SALVO COM SUCESSO");
}

export async function removeItem(id: string) {
  let recipes: FoodsProps[] = await getFavorites("@appreceitas");

  let myFavorites = recipes.filter((item) => {
    return item.id !== id;
  });

  await AsyncStorage.setItem("@appreceitas", JSON.stringify(myFavorites));
  console.log("ITEM DELETADO COM SUCESSO");
  return myFavorites;
}

export async function isFavorite(receipe: FoodsProps) {
  let myRecipes: FoodsProps[] = await getFavorites("@appreceitas");
  const favorites = myRecipes.find((item) => item.id === receipe.id);

  if (favorites) {
    return true;
  }

  return false;
}
