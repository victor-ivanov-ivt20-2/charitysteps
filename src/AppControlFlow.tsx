import { FC, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./AppNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ActivityIndicator } from "react-native-paper";
import { Linking, Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppDispatch } from "./redux/hooks";
import { setAuth } from "./redux/slices/AuthSlices";
import { DefaultTheme } from "@react-navigation/native";
const PERSISTENCE_KEY = "NAVIGATION_STATE_V1";
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};
const AppControlFlow: FC = () => {
  const [isReady, setIsReady] = useState(false);
  const [initialState, setInitialState] = useState();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();

        if (Platform.OS !== "web" && initialUrl == null) {
          const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
          const state = savedStateString
            ? JSON.parse(savedStateString)
            : undefined;

          if (
            state !== undefined &&
            state.routeNames.filter(
              (el: string) =>
                ["Login", "Onboarding", "SignIn"].indexOf(el) === -1
            )
          ) {
            // console.log("state", state);
            // setInitialState(state);
            // dispatch(setAuth(true));
          }
        }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  if (!isReady) {
    return <ActivityIndicator />;
  }
  return (
    <SafeAreaProvider>
      <NavigationContainer
        initialState={initialState}
        onStateChange={(state) =>
          AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
        }
        theme={MyTheme}
      >
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppControlFlow;
