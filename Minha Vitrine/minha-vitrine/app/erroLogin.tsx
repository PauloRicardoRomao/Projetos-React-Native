import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function ErroLogin(){
    const router = useRouter();
    return(
        <ParallaxScrollView
            headerBackgroundColor={{ light: "#be0000", dark: "#750000" }}
            headerImage={
                <Image
                    source={require("@/assets/spfc/logoSPFCsfundo.png")}
                    style={styles.logo}
                    contentFit="contain"
                />
            }
            tituloApp={"Soberano'S"}
            sizeTitulo={34}
            visivel={false}
        >
            <ThemedView style={styles.container}>
                <ThemedView style={styles.containerPrincipal}>
                    <ThemedText style={styles.mensagemErro} lightColor="#000000" darkColor="#a70000">
                        Erro ao efetuar login, dados incorretos.
                    </ThemedText>
                </ThemedView>
                <TouchableOpacity 
                    style={styles.botaoVoltar}
                    onPress={() => router.push("/")} 
                >
                    <ThemedText style={styles.textoBotao}>
                        ←  Voltar ao Menu
                    </ThemedText>
                </TouchableOpacity>
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
        position: 'absolute',
        top: 50,
        left: -20,
        backgroundColor: '#fff',
        elevation: 6,
        borderColor: '#7c7c7c',
        borderWidth: 5
    }, 
    container: {
        width: '100%',
        height: 300,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#ffffff",
        borderRadius: 12,
        elevation: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.05)",
        overflow: 'hidden',
        padding: 10
    },
    containerPrincipal: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: 'transparent',
        padding: 8
    },
    mensagemErro: {
        flexWrap: 'wrap',
        textAlign: "justify",
        fontSize: 22,
        fontWeight: "bold",
        backgroundColor: "transparent",
    },
    botaoVoltar: {
        marginBottom: 10,
        backgroundColor: "#be0000",
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 12,
        elevation: 6,
    },

    textoBotao: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center"
    },
});