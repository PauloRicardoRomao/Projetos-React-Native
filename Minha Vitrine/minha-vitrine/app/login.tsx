import { Image } from "expo-image";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";


type Props = {
    u?: string;
    s?: string;
};

type LoginPayload = {
    alUsuario: string;
    alSenha: string;
    alNome: string;
    adUsuario: string;
    adSenha: string;
    adNome: string;
};

export default function Login({ u, s }: Props) {
    const router = useRouter();
    
    const login: LoginPayload = {
        alUsuario: " aluno@eduvale.com.br",
        alSenha: "123456",
        alNome: "Paulo",
        adUsuario: "admin@eduvale.com.br",
        adSenha: "654321",
        adNome: "Paulo"
    };
    const [usuario, setUsuario] = useState(u ?? login.adUsuario);
    const [senha, setSenha] = useState(s ?? login.adSenha);

    type Destino = "admin" | "aluno" | "erro";

    const entrar = (usuario: string, senha: string): Destino => {
        if (usuario === login.adUsuario && senha === login.adSenha) return "admin";
        if (usuario === login.alUsuario && senha === login.alSenha) return "aluno";
        return "erro";
    };  

    const Entrar = () => {
        const destino = entrar(usuario, senha);

        if (destino === "erro") {
            router.replace({
                pathname: "/erroLogin",
                params: { nome: usuario },
            });
            return;
        }

        if (destino === "admin") {
            router.replace({
                pathname: "/(admin)/painelAdminVisualizacao",
                params: { nome: login.adNome },
            });
            return;
        }

        router.replace({
            pathname: "/painelAluno",
            params: { nome: login.alNome },
        });
    };

    return (
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
                    <ThemedView style={styles.containerForm}>
                        <TextInput
                            placeholder="Email"
                            value={usuario}
                            onChangeText={setUsuario}
                            style={styles.txtUsuario}
                            autoCapitalize="none"
                        />

                        <TextInput
                            placeholder="Senha"
                            value={senha}
                            onChangeText={setSenha}
                            secureTextEntry
                            style={styles.txtSenha}
                        />
                    </ThemedView>

                    <ThemedView style={styles.containerBtns}>
                        <TouchableOpacity style={styles.btnEntrar} onPress={Entrar}>
                            <ThemedText style={styles.txtBtn}>Entrar</ThemedText>
                        </TouchableOpacity>
                    </ThemedView>
                </ThemedView>
            }
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
        position: 'absolute',
        top: 50,
        left: -20,
        backgroundColor: '#fff',
        elevation: 6,
        borderColor: '#7c7c7c',
        borderWidth: 5
    },
    container: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        gap: 30,
        backgroundColor: "#e6e6e6",
        borderRadius: 12,
        elevation: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.05)",
    },
    containerForm: {
        flex: 1,
        width: '100%',
        gap: 12,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#e6e6e6',
        marginTop: 20,
    },
    txtUsuario: {
        width: "90%",
        backgroundColor: '#fff',
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
        paddingLeft: 10,
        paddingRight: 2,
        fontSize: 16,
        fontWeight: "400",
        borderRadius: 12,
        elevation: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.05)",
    },
    txtSenha: {
        width: "90%",
        backgroundColor: '#fff',
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
        paddingLeft: 10,
        paddingRight: 5,
        fontSize: 16,
        fontWeight: "400",
        borderRadius: 12,
        elevation: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
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
        marginBottom: 20,
        backgroundColor: '#e6e6e6',
    },
    btnEntrar: {
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
    txtBtn: {
        fontSize: 20,
        fontWeight: "800",
        color: '#fff',
    }
});