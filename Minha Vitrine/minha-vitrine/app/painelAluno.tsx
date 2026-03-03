import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Image } from "expo-image";
import { StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView, Dimensions } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import Card from "@/components/ui/card";
import {useState} from 'react';

const { height, width } = Dimensions.get("window");

type Produto = {
  img: number,
  nomeProduto: string,
  preco: number,
  descProduto: string
}

export default function PainelAluno() {
  const { nome } = useLocalSearchParams<{ nome?: string }>();
  const router = useRouter();

  const produtos: Produto[] = [
    { img: require( '@/assets/spfc/spfc22-23.jpg'),
      nomeProduto: 'Camisa III 22/23', 
      preco: 360.00, 
      descProduto: 'Camisa uniforme 3 22/23, modelo torcedor.'
    }, 
    {
      img: require( '@/assets/spfc/spfc25.jpg'),
      nomeProduto: 'Camisa III 2025', 
      preco: 300.00, 
      descProduto: 'Camisa uniforme 3 temporada 2025, inpirada na camisa utilizada pelo M1TO durante a conquista do Tri-Mundial.'},
    {
      img: require( '@/assets/spfc/spfc2-2025.jpg'),
      nomeProduto: 'Camisa II 25/26', 
      preco: 200.00, 
      descProduto: 'Camisa uniforme 2 temporada 25/26. Sem Patrocínio.'},
    {
      img: require( '@/assets/spfc/spfc1-2026.jpg'),
      nomeProduto: 'Camisa I 2026', 
      preco: 230.00, 
      descProduto: 'Camisa uniforme 2 temporada 25/26.'
    },
    {
      img: require( '@/assets/spfc/casaco2025.jpg'),
      nomeProduto: 'Casaco 2025', 
      preco: 390.00, 
      descProduto: 'Casaco com capuz modelo viagem SPFC 2025.'
    }
  ];

  const [paginaAtual, setPaginaAtual] = useState(0);

  const confirmarSaida = () => {
    Alert.alert("Sair", "Deseja realmente sair?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Sair",
        style: "destructive",
        onPress: () => router.replace("/login"),
      },
    ]);
  };


  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#be0000", dark: "#750000" }}
      headerImage={
        <Image
          source={require("@/assets/spfc/logoSPFC.png")}
          style={styles.logo}
          contentFit="contain"
        />
      }
      tituloApp={`Bem-vindo, ${nome ?? "usuário"}`}
      sizeTitulo={24}
      onPress={confirmarSaida}
      visivel={true}
    >
      <ThemedView style={styles.container}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          pagingEnabled
          style={styles.containerCards}
          decelerationRate="fast"
          snapToAlignment="center"
          onMomentumScrollEnd={(event) => {
            const offsetX = event.nativeEvent.contentOffset.x;
            const index = Math.round(offsetX / (width * 0.84));
            setPaginaAtual(index);
          }}
        >
          {produtos.map((p, index) => (
            <ThemedView key={`${p.nomeProduto}-${index}`} style={styles.cardWrap}>
              <Card img={p.img} nomeProduto={p.nomeProduto} descricaoProduto={p.descProduto} valorProduto={p.preco.toFixed(2)} />
            </ThemedView>
          ))}
        </ScrollView>
      </ThemedView>
      <ThemedView style={styles.indicadorContainer}>
        {produtos.map((_, index) => (
          <ThemedView
            key={index}
            style={[
              styles.bolinha,
              paginaAtual === index && styles.bolinhaAtiva
            ]}
          />
        ))}
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
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderBottomRightRadius: 24,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.05)",
    overflow: "hidden",
    marginTop: 30
  },

  containerCards: {
    backgroundColor: "transparent",
    height: height / 2,
    
  },

  page: {
    width: width,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 12,
    paddingTop: 12,
    backgroundColor: "transparent",
  },

  cardWrap: {
    width: width * 0.84,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    padding: 12,
    
  },

  indicadorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    backgroundColor: 'transparent'
  },

  bolinha: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
  },

  bolinhaAtiva: {
    width: 16,
    backgroundColor: "#be0000",
  },
});