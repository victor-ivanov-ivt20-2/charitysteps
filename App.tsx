import * as React from "react";
import { PaperProvider } from "react-native-paper";
import { Provider as StoreProvider } from "react-redux";
import { store } from "./src/redux/store";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import Test from "./src/components/nav";
import { NavigationContainer } from "@react-navigation/native";

export default function Main() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Test />
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
}
