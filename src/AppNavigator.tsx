import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Test from "./components/nav";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import OnboradingScreen from "./screens/OnboardingScreen";
import LoginScreen from "./screens/LoginScreen";
import SignInScreen from "./screens/SignInScreen";
import { useAppSelector } from "./redux/hooks";
import AuthNavigation from "./navigation/AuthNavigation";

const Stack = createNativeStackNavigator();

export default () => {
  const token = useAppSelector((state) => state.auth.token);

  return (
    <>
      {/* <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      /> */}

      {token !== undefined ? <></> : <AuthNavigation />}

      {/* <Stack.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }: any) => {
            let iconName;

            if (route.name === "Onboarding") {
              iconName = focused ? "handshake" : "handshake";
            } else {
              iconName = focused ? "handshake" : "handshake";
            }

            return <MaterialIcon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
        initialRouteName="Onboarding"
      >
        {isAuth ? (
          <Stack.Group>
            <Stack.Screen name="Home" component={Test} />
          </Stack.Group>
        ) : (
          <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Onboarding" component={OnboradingScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignIn" component={SignInScreen} />
          </Stack.Group>
        )}
      </Stack.Navigator> */}
    </>
  );
};
