import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, IconButton, Text } from "react-native-paper";
import { ChevronLeft } from "../icons/ChevronLeft";
import OnboradingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/LoginScreen";
import SignInScreen from "../screens/SignInScreen";
import EmailScreen from "../screens/auth/EmailScreen";
import { Pressable, Touchable, TouchableNativeFeedback } from "react-native";
import EmailCodeScreen from "../screens/auth/EmailCodeScreen";
type LoginParamList = {
  WelcomeScreen: undefined;
  Login: undefined;
  Email: undefined;
  EmailCode: { email: string };
  SignIn: { token: string; id: string };
};

const Stack = createNativeStackNavigator<LoginParamList>();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerShadowVisible: false,
        headerTitleAlign: "center",
        headerLeft: () => (
          <Pressable
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
            }}
            onPress={() => navigation.goBack()}
          >
            <>
              <IconButton icon={() => <ChevronLeft />} />
              <Text style={{ color: "#2563EB" }}>Назад</Text>
            </>
          </Pressable>
        ),
        animation: "fade",
      })}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="WelcomeScreen"
        component={OnboradingScreen}
      />
      <Stack.Screen
        options={{ headerTitle: "" }}
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{ headerTitle: "" }}
        name="Email"
        component={EmailScreen}
      />
      <Stack.Screen
        options={{ headerTitle: "" }}
        name="EmailCode"
        component={EmailCodeScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
