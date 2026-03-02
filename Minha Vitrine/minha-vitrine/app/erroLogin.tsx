import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

export default function ErroLogin(){
    return(
        <ParallaxScrollView
            headerBackgroundColor={{ light: "#be0000", dark: "#750000" }}
            headerImage={
                <Image
                    source={require("@/assets/images/logoSPFCsfundo.png")}
                    style={styles.logo}
                    contentFit="contain"
                />
            }
            tituloApp={"Soberano'S"}
            sizeTitulo={34}
            children={
                <ThemedView style={styles.container}>
                    <ThemedText style={styles.mensagemErro}>
                        Erro ao efetuar login, Usuário ou senha incorretos.
                    </ThemedText>
                </ThemedView>
            }
        >
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 220,
        height: 220,
    },
    
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    mensagemErro: {
        textAlign: "justify",
        fontSize: 18,
        fontWeight: "600"
    }
});