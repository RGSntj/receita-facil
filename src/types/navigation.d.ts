import { FoodsProps } from "../components/FoodList";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      detail: { data: FoodsProps };
      favorites: undefined;
      search: { name: string };
    }
  }
}
