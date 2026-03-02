import { Redirect } from "expo-router";

export default function Index() {
  const logado = false;

  if (!logado) {
    return <Redirect href="/login" />;
  }

  return <Redirect href="/painelAluno" />;
}