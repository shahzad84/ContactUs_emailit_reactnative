import Header from "./src/header";

import * as React from "react";
import { PaperProvider } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <PaperProvider>
      <Header />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
