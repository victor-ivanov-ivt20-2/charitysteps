import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { IconButton, MD3Colors } from "react-native-paper";
import { ChevronLeft } from "../icons/ChevronLeft";
import OnboradingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/LoginScreen";
import SignInScreen from "../screens/SignInScreen";
import EmailScreen from "../screens/auth/EmailScreen";
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
          <IconButton
            icon={() => <ChevronLeft />}
            iconColor={MD3Colors.error50}
            size={20}
            onPress={() => navigation.goBack()}
          />
        ),
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
    </Stack.Navigator>
  );
};

export default AuthNavigation;
