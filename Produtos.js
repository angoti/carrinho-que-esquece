import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Produtos({ navigation }) {
  const [carrinho, setCarrinho] = useState([]);
  return (
    <View style={styles.container}>
      <Text>Itens no carrinho: {carrinho.length}</Text>
      <Button title="Adicionar café" onPress={() => setCarrinho([...carrinho, "café"])} />
      <Button title="Ir ao perfil" onPress={() => navigation.navigate("Perfil")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
});
