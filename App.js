import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Produtos from "./Produtos";
import Detalhes from "./Detalhes";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Produtos">
          <Stack.Screen name="Produtos" component={Produtos} />
          <Stack.Screen name="Detalhes" component={Detalhes} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
