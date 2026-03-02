import { Image } from "expo-image";
import { ThemedText } from "../themed-text";
import { ThemedView } from "../themed-view";
import { Alert, StyleSheet, TouchableOpacity } from "react-native";

type props = {
    nomeProduto?: string,
    descricaoProduto? : string,
    valorProduto? : string,
    dados? : string,
};

export default function Card({nomeProduto, descricaoProduto, valorProduto}: props){
    
    const infoProduto = () => {
        Alert.alert(
            "Informações do produto",
            `Nome: ${nomeProduto ?? "-"}\nValor: R$ ${valorProduto ?? "-"}`
        );
    };

    return(
        <ThemedView style={styles.containerPrincipal}>
            <ThemedView style={styles.containerImagem}>
                <Image style={styles.imagem} />
            </ThemedView>
            <ThemedView style={styles.containerTexto}>
                <ThemedView style={styles.containerTexto}>
                    <ThemedText style={styles.tituloCard} lightColor="#1f1f1f" darkColor="#fff">{nomeProduto} » R${valorProduto}</ThemedText>
                </ThemedView>
                <ThemedView style={styles.containerTexto}>
                    <ThemedText style={styles.descricaoCard} lightColor="#1f1f1f" darkColor="#fff">{descricaoProduto}</ThemedText>
                    <TouchableOpacity style={styles.btnSobre} onPress={infoProduto}>
                        <ThemedText style={styles.tituloCard} lightColor="#1f1f1f" darkColor="#fff">Ver</ThemedText>
                    </TouchableOpacity>
                </ThemedView>
            </ThemedView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    containerPrincipal: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        padding: 8,
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
    containerImagem: {
        flex: 2,
        alignItems: "center",
        justifyContent: 'center',
    },
    imagem: {
        width: '100%',
        height: '100%'
    },
    containerTexto: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        gap: 6
    },
    tituloCard: {
        fontSize: 22,
        fontWeight: "800",
        textAlign: 'center'
    },
    descricaoCard: {
        fontSize: 16,
        fontWeight: "400",
        textAlign: 'justify'
    },
    btnSobre: {
        width: "auto",
        height: "auto",
        paddingVertical: 20,
        paddingHorizontal: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        backgroundColor: '#747474',
        elevation: 8,
        shadowColor: '#000000'
    }

});