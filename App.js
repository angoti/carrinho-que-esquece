import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Perfil from "./Perfil";
import Produtos from "./Produtos";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Produtos">
        <Stack.Screen name="Produtos" component={Produtos} />
        <Stack.Screen name="Perfil" component={Perfil} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
