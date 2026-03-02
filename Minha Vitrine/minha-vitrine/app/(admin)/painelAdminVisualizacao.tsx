import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Image } from "expo-image";
import { StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import Card from "@/components/ui/card";

type Produto = {
  nomeProduto: string,
  preco: number,
  descProduto: string
}

export default function PainelAdminVisualizacao() {
  const { nome } = useLocalSearchParams<{ nome?: string }>();

  const produtos: Produto[] = [
    {
      nomeProduto: 'Camiseta III 2022', 
      preco: 400.00, 
      descProduto: 'Camiseta do uniforme 3 2022, modelo torcedor.'
    }, 
    {
      nomeProduto: 'Camiseta Goleiro R.CENI 2005', 
      preco: 550.00, 
      descProduto: 'Camiseta de goleiro temporada 2005, Tri-Libertadores.'},
    {
      nomeProduto: 'Agasalho Viagem Edição 2024', 
      preco: 700.00, 
      descProduto: 'Agasalho inspirado na temporada 1994, conquista no Japão'},
    {
      nomeProduto: 'Kit SPFC Treino 2023', 
      preco: 600.00, 
      descProduto: 'Kit de treino, modelo 2023.'
    },
    {
      nomeProduto: 'Camiseta SPFC HERNANES 2017', 
      preco: 500.00, 
      descProduto: 'Camiseta Hernanes, 2017'
    }
  ];

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#be0000", dark: "#750000" }}
      headerImage={
        <Image
          source={require("@/assets/images/logoSPFC.png")}
          style={styles.logo}
          contentFit="contain"
        />
      }
      tituloApp={`Bem-vindo, ${nome ?? "usuário"}`}
      sizeTitulo={24}
    >
      <ThemedView style={styles.container}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          pagingEnabled
          style={styles.containerCards}
          contentContainerStyle={styles.conteudoContainerCards}
        >
          {produtos.map((p, index) => (
            <ThemedView key={`${p.nomeProduto}-${index}`} style={styles.containerCard}>
              <Card nomeProduto={p.nomeProduto} descricaoProduto={p.descProduto} valorProduto={p.preco.toFixed(2)} />
            </ThemedView>
          ))}
          
        </ScrollView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    position: "absolute",
    top: 50,
    left: -20,
    backgroundColor: "#fff",
    elevation: 6,
    borderColor: "#7c7c7c",
    borderWidth: 5,
  },

  container: {
    flex: 2,
    width: "100%",
    paddingBottom: 30,
    backgroundColor: "#e6e6e6",
    borderRadius: 12,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.05)",
    overflow: 'hidden',
  },

  containerCards: {
    backgroundColor: 'transparent'
  },
  containerCard: {
    width: 320,
    alignItems:  'center',
    justifyContent: 'center',
    padding: 8
  },
  conteudoContainerCards: {
    paddingHorizontal: 8,
  }
});