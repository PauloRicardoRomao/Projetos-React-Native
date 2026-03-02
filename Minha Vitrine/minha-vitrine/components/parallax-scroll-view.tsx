import type { PropsWithChildren, ReactElement } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollOffset,
} from "react-native-reanimated";

import { ThemedView } from "@/components/themed-view";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { ThemedText } from "./themed-text";

const HEADER_HEIGHT = 250;

type Props = PropsWithChildren<{
  headerImage: ReactElement;
  headerBackgroundColor: { dark: string; light: string };
  tituloApp: string;
  sizeTitulo: number;
}>;

export default function ParallaxScrollView({
  children,
  headerImage,
  headerBackgroundColor,
  tituloApp,
  sizeTitulo
}: Props) {
  const backgroundColor = useThemeColor({}, "background");
  const colorScheme = useColorScheme() ?? "light";

  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollOffset(scrollRef);

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1]),
        },
      ],
    };
  });

  return (
    <Animated.ScrollView
      ref={scrollRef}
      style={{ backgroundColor, flex: 1 }}
      scrollEventThrottle={16}
    >
      <Animated.View
        style={[
          styles.header,
          { backgroundColor: headerBackgroundColor[colorScheme] },
          headerAnimatedStyle,
        ]}
      >
        {/* IMAGEM FICA EXATAMENTE ONDE ESTÁ */}
        {headerImage}

        {/* TÍTULO À DIREITA (overlay), sem mexer na imagem */}
        <ThemedView style={styles.containerTitulo}>
          <ThemedText style={[styles.tituloApp, {fontSize: sizeTitulo}]}>{tituloApp}</ThemedText>
        </ThemedView>
      </Animated.View>

      <ThemedView style={styles.content}>{children}</ThemedView>
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: HEADER_HEIGHT,
    overflow: "hidden",
    position: "relative", // essencial para o overlay do título
  },

  containerTitulo: {
    position: "absolute",
    right: 16,
    top: 0,
    bottom: 0,
    height: '100%',
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },

  tituloApp: {
    color: "#fff",
    fontWeight: "900",
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: "right",
    width: '100%',
    padding: 20,
    paddingRight: 2,
    textShadowColor: "#000",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },

  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
});