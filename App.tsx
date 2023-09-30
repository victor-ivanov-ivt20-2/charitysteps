import AppControlFlow from "./src/AppControlFlow";
import { Provider as StoreProvider } from "react-redux";
import { store } from "./src/redux/store";
import { PaperProvider } from "react-native-paper";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { View, StyleSheet } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function Main() {
  const [fontsLoaded] = useFonts({
    "SF-Pro-Black": require("./assets/fonts/SFPro/SF-Pro-Display-Black.otf"),
    "SF-Pro-Heavy": require("./assets/fonts/SFPro/SF-Pro-Display-Heavy.otf"),
    "SF-Pro-Bold": require("./assets/fonts/SFPro/SF-Pro-Display-Bold.otf"),
    "SF-Pro-Semibold": require("./assets/fonts/SFPro/SF-Pro-Display-Semibold.otf"),
    "SF-Pro-Medium": require("./assets/fonts/SFPro/SF-Pro-Display-Medium.otf"),
    "SF-Pro-Regular": require("./assets/fonts/SFPro/SF-Pro-Display-Regular.otf"),
    "SF-Pro-Light": require("./assets/fonts/SFPro/SF-Pro-Display-Light.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <View style={styles.container} onLayout={onLayoutRootView}>
          <AppControlFlow />
        </View>
      </PaperProvider>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
