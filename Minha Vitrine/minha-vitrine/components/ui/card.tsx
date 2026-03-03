import { Image } from "expo-image";
import { ThemedText } from "../themed-text";
import { ThemedView } from "../themed-view";
import { Alert, StyleSheet, TouchableOpacity } from "react-native";

type props = {
    img?: number,
    nomeProduto?: string,
    descricaoProduto? : string,
    valorProduto? : string,
    dados? : string,
};

export default function Card({img, nomeProduto, descricaoProduto, valorProduto}: props){
    
    const infoProduto = () => {
        Alert.alert(
            `Informações do produto`,
            `Nome: ${nomeProduto ?? "-"}\n\n${descricaoProduto ?? "-"}\n\nValor: R$ ${valorProduto ?? "-"}`
        );
    };

    return(
        <ThemedView style={styles.containerPrincipal}>
            <ThemedView style={styles.containerImagem}>
                <Image 
                    source={img}
                    contentFit="contain"
                    contentPosition={"center"}
                    style={styles.imagem} 
                />
            </ThemedView>
            <ThemedView style={styles.containerTexto}>
                <ThemedView style={styles.containerTexto}>
                    <ThemedView style={styles.linhaTitulo}>
                        <ThemedText style={styles.tituloCard} lightColor="#000000" darkColor="#a70000">{nomeProduto}  »  </ThemedText>
                        <ThemedText style={styles.precoCard} lightColor="#1f1f1f" darkColor="#ffe600be">R${valorProduto}</ThemedText>
                    </ThemedView>
                </ThemedView>
                <ThemedView style={styles.containerTexto}>
                    <TouchableOpacity style={styles.btnSobre} onPress={infoProduto}>
                        <ThemedText style={styles.txtBtnSobre} lightColor="#1f1f1f" darkColor="#fff">Ver</ThemedText>
                    </TouchableOpacity>
                </ThemedView>
            </ThemedView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    containerPrincipal: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        padding: 8,
        borderTopLeftRadius: 24,
        borderBottomRightRadius: 24,
        elevation: 8,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.05)",
        backgroundColor: "#ffffff"
    },
    containerImagem: {
        height: '70%',
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
        borderRadius: 12,
        overflow: 'hidden'
    },
    imagem: {
        width: '100%',
        height: 350,
        borderRadius: 12,
    },
    containerTexto: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "transparent",
    },
    linhaTitulo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        backgroundColor: 'transparent',
        width: '100%'
    },
    tituloCard: {
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: "condensedBold",
        textAlign: 'center',
        textShadowColor: "#ff00009a",
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 6,
        width: '60%'
    },
    precoCard: {
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 24,
        fontWeight: "bold",
        textAlign: 'center',
        textShadowColor: "#886f02e5",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 6,
        width: '40%',
        backgroundColor: '#000000',
        borderTopLeftRadius: 24,
        borderBottomRightRadius: 24,
        elevation: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.05)",
    },
    descricaoCard: {
        flexWrap: 'wrap',
        fontSize: 14,
        fontWeight: "400",
        textAlign: 'justify',
    },
    btnSobre: {
        width: "auto",
        height: "auto",
        paddingVertical: 10,
        paddingHorizontal: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        backgroundColor: '#747474',
        elevation: 8,
        shadowColor: '#000000'
    },
    txtBtnSobre: {
        flexWrap: 'wrap',
        fontSize: 16,
        fontWeight: "800",
        textAlign: 'center'
    }
});