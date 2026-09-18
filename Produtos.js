import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const produtos = [
  {
    id: "cafe",
    nome: "Café",
    preco: "R$ 8,00",
    imagem: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "leite",
    nome: "Leite",
    preco: "R$ 6,50",
    imagem: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "pao",
    nome: "Pão",
    preco: "R$ 10,00",
    imagem: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "queijo",
    nome: "Queijo",
    preco: "R$ 18,00",
    imagem: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Produtos({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={produtos}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        ListHeaderComponent={<Text style={styles.title}>Escolha um produto</Text>}
        renderItem={({ item }) => (
          <Pressable
            style={styles.productCard}
            onPress={() =>
              navigation.navigate("Detalhes", {
                produto: item,
                selecaoId: Date.now(),
              })
            }>
            <View>
              <Text style={styles.productName}>{item.nome}</Text>
              <Text style={styles.productPrice}>{item.preco}</Text>
            </View>
            <Text style={styles.action}>Adicionar</Text>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f4f6f8" },
  list: { padding: 20, gap: 12 },
  title: { color: "#111827", fontSize: 24, fontWeight: "bold", marginBottom: 8 },
  productCard: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    elevation: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 18,
  },
  productName: { color: "#111827", fontSize: 18, fontWeight: "600" },
  productPrice: { color: "#6b7280", marginTop: 4 },
  action: { color: "#2563eb", fontWeight: "bold" },
});
