import { useEffect, useState } from "react";
import { Button, FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Detalhes({ route }) {
  const [carrinho, setCarrinho] = useState([]);
  const insets = useSafeAreaInsets();
  const produto = route.params?.produto;

  useEffect(() => {
    if (produto) {
      setCarrinho(itens => [...itens, produto]);
    }
  }, [route.params?.selecaoId]);

  function acrescentarProduto() {
    if (produto) {
      setCarrinho(itens => [...itens, produto]);
    }
  }

  function removerProduto() {
    if (!produto) {
      return;
    }

    setCarrinho(itens => {
      const indice = itens.findIndex(item => item.id === produto.id);
      return indice === -1 ? itens : itens.filter((_, index) => index !== indice);
    });
  }

  const quantidade = produto ? carrinho.filter(item => item.id === produto.id).length : 0;

  return (
    <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      {produto && (
        <View style={styles.productSection}>
          <Image source={{ uri: produto.imagem }} style={styles.productImage} resizeMode="cover" />
          <Text style={styles.productName}>{produto.nome}</Text>
          <Text style={styles.productPrice}>{produto.preco}</Text>

          <View style={styles.quantityRow}>
            <Pressable style={styles.quantityButton} onPress={removerProduto}>
              <Text style={styles.quantityButtonText}>-</Text>
            </Pressable>
            <Text style={styles.quantity}>{quantidade}</Text>
            <Pressable style={styles.quantityButton} onPress={acrescentarProduto}>
              <Text style={styles.quantityButtonText}>+</Text>
            </Pressable>
          </View>
        </View>
      )}
      <View style={styles.cartSection}>
        <Text style={styles.cartTitle}>Carrinho</Text>
        <FlatList
          style={styles.cartFlatList}
          data={carrinho}
          keyExtractor={(_, index) => `${index}`}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Image source={{ uri: item.imagem }} style={styles.cartItemImage} />
              <View style={styles.cartItemInfo}>
                <Text style={styles.cartItemName}>{item.nome}</Text>
                <Text style={styles.cartItemPrice}>{item.preco}</Text>
              </View>
              <Text style={styles.cartItemQuantity}>1x</Text>
            </View>
          )}
          ListEmptyComponent={<Text style={styles.emptyText}>Nenhum produto adicionado.</Text>}
          contentContainerStyle={styles.cartList}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f8",
    overflow: "hidden",
    padding: 12,
  },
  productSection: {
    flexShrink: 0,
  },
  cartSection: {
    flex: 1,
    minHeight: 0,
    overflow: "hidden",
  },
  cartFlatList: {
    flex: 1,
  },
  productImage: {
    alignSelf: "center",
    borderRadius: 16,
    height: 100,
    width: "100%",
  },
  productName: {
    color: "#111827",
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 8,
    textAlign: "center",
  },
  productPrice: {
    color: "#2563eb",
    fontSize: 20,
    fontWeight: "600",
    marginTop: 6,
    textAlign: "center",
  },
  quantityRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    marginVertical: 20,
  },
  quantityButton: {
    alignItems: "center",
    backgroundColor: "#2563eb",
    borderRadius: 22,
    height: 44,
    justifyContent: "center",
    width: 44,
  },
  quantityButtonText: { color: "#fff", fontSize: 26, lineHeight: 30 },
  quantity: { color: "#111827", fontSize: 22, fontWeight: "bold", minWidth: 28, textAlign: "center" },
  cartSummary: { color: "#374151", fontSize: 16, textAlign: "center" },
  cartTitle: { color: "#111827", fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  cartList: { gap: 8, paddingBottom: 10 },
  cartItem: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    padding: 10,
  },
  cartItemImage: { borderRadius: 8, height: 54, width: 54 },
  cartItemInfo: { flex: 1, marginLeft: 12 },
  cartItemName: { color: "#111827", fontSize: 16, fontWeight: "600" },
  cartItemPrice: { color: "#6b7280", marginTop: 4 },
  cartItemQuantity: { color: "#2563eb", fontWeight: "bold", marginLeft: 8 },
  emptyText: { color: "#6b7280", textAlign: "center" },
});
