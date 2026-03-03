import { Tabs, useLocalSearchParams} from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { HapticTab } from "@/components/haptic-tab";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function AdminTabs() {
    const colorScheme = useColorScheme();
    const { nome } = useLocalSearchParams<{ nome?: string }>();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
                headerShown: false,
                tabBarButton: HapticTab,
            }}
        >
            <Tabs.Screen
                name="painelAdminVisualizacao"
                options={{
                    title: "Produtos",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="list" size={size ?? 28} color={color} />
                    ),
                }}
                initialParams={{ nome }}
            />

            <Tabs.Screen
                name="painelAdminCadastro"
                options={{
                    title: "Cadastro de Produto",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="add-circle" size={size ?? 28} color={color} />
                    ),
                }}
                initialParams={{ nome }}
            />
        </Tabs>
    );
}