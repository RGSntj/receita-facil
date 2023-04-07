import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

import { Home } from "../screens/Home";
import { Detail } from "../screens/Detail";
import { Search } from "../screens/Search";

export function StackRoutes() {
  return (
    <Navigator>
      <Screen
        name="home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="detail"
        component={Detail}
        options={{
          title: "Detalhes da receita",
        }}
      />
      <Screen
        name="search"
        component={Search}
        options={{
          title: "Veja o que encontramos",
        }}
      />
    </Navigator>
  );
}
