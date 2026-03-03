import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Image } from "expo-image";
import { StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";

export default function PainelAdminCadastro() {
    const { nome } = useLocalSearchParams<{ nome?: string }>();
    const router = useRouter();

    const [nomeProduto, setNomeProduto] = useState("");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState("");
    const [fotoUri, setFotoUri] = useState<string | null>(null);

    const salvarProduto = () => {
        if (!nomeProduto.trim() || !descricao.trim() || !preco.trim()) {
            Alert.alert("Atenção", "Preencha nome, descrição e preço.");
            return;
        }

        Alert.alert("OK", "Produto cadastrado (exemplo).");
    };

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
                visivel={true}
                onPress={confirmarSaida}
            >

            <ThemedView style={styles.container}>
                <ThemedView style={styles.menuBar}>
                    <TouchableOpacity style={styles.menuItem}>
                        <ThemedText style={styles.txtMenu}>Cadastro de Produto</ThemedText>
                    </TouchableOpacity>
                </ThemedView>

                <ThemedView style={styles.conteudo}>

                    <ThemedView style={styles.blocoFoto}>
                        <TouchableOpacity style={styles.btnFoto}>
                            <ThemedText style={styles.txtBtnFoto}>
                                {fotoUri ? "Trocar foto" : "Adicionar foto"}
                            </ThemedText>
                        </TouchableOpacity>

                        {fotoUri && (
                            <Image source={{ uri: fotoUri }} style={styles.previewFoto} contentFit="cover" />
                        )}
                    </ThemedView>


                    <TextInput
                        placeholder="Nome"
                        value={nomeProduto}
                        onChangeText={setNomeProduto}
                        style={styles.txtCadProduto}
                    />

                    <TextInput
                        placeholder="Descrição"
                        value={descricao}
                        onChangeText={setDescricao}
                        style={styles.txtCadProduto}
                    />

                    <TextInput
                        placeholder="Preço"
                        value={preco}
                        onChangeText={setPreco}
                        keyboardType="numeric"
                        style={styles.txtCadProduto}
                    />
                    <ThemedView style={styles.containerBtns}>
                        <TouchableOpacity style={styles.btnSalvar} onPress={salvarProduto}>
                            <ThemedText style={styles.txtSalvar}>Salvar</ThemedText>
                        </TouchableOpacity>
                    </ThemedView>
                </ThemedView>
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

    menuBar: {
        width: "100%",
        height: 54,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 12,
        backgroundColor: "#2c2c2c",
        borderRadius: 12,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        marginBottom: 25,
        elevation: 6,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
    },

    menuItem: {
        paddingVertical: 10,
        paddingHorizontal: 14,
        borderRadius: 10,
        backgroundColor: "transparent",
    },

    txtMenu: {
        fontSize: 16,
        fontWeight: "700",
        color: "#fff",
    },

    conteudo: {
        width: "100%",
        paddingHorizontal: 12,
        paddingTop: 20,
        gap: 12,
        backgroundColor: "transparent",
    },

    blocoFoto: {
        width: "100%",
        alignItems: "center",
        gap: 10,
        marginBottom: 20,
        backgroundColor: "transparent",
    },

    btnFoto: {
        width: "auto",
        height: "auto",
        paddingVertical: 20,
        paddingHorizontal: 30,
        borderRadius: 12,
        backgroundColor: "#747474",
        elevation: 6,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        marginBottom: 20
    },

    txtBtnFoto: {
        flexWrap: 'wrap',
        fontSize: 18,
        fontWeight: "800",
        color: "#fff",
        textAlign: 'center'
    },

    previewFoto: {
        width: 140,
        height: 140,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: "rgba(0,0,0,0.08)",
        backgroundColor: "#fff",
    },

    txtCadProduto: {
        width: "100%",
        backgroundColor: "#fff",
        paddingLeft: 10,
        paddingRight: 10,
        paddingVertical: 12,
        fontSize: 18,
        borderRadius: 12,
        elevation: 6,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.18,
        shadowRadius: 6,
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.05)",
    },

    containerBtns: {
        flex: 1,
        width: '100%',
        height: 'auto',
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#e6e6e6',
    },

    btnSalvar: {
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
    },

    txtSalvar: {
        fontSize: 20,
        fontWeight: "800",
        color: '#fff',
    },
});