import React from "react";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import { ThemeProvider } from "styled-components/native";

import { THEME } from "./theme";
import { Routes } from "./routes";

export default function App() {
  if (Platform.OS === "android")
    NavigationBar.setBackgroundColorAsync(THEME.colors.primary);

  return (
    <ThemeProvider theme={THEME}>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar
          backgroundColor={THEME.colors.primary}
          barStyle="light-content"
        />
        <Routes />
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: THEME.colors.light,
  },
});
