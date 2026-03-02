import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";

export default function PainelAluno() {
  const { nome } = useLocalSearchParams<{ nome?: string }>();

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

  
});