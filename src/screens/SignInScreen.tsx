import { useState } from "react";
import { View, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setAuth } from "../redux/slices/AuthSlices";

const LoginScreen = () => {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openPass, setOpenPass] = useState(true);

  const login = async () => {
    if (true) {
      dispatch(setAuth("true"));
    }
  };

  return (
    <View>
      <TextInput
        label="Почта"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        label="Пароль"
        value={password}
        onChangeText={(text) => setPassword(text)}
        right={
          <TextInput.Icon
            icon="eye"
            onPress={() => setOpenPass((prev) => !prev)}
          />
        }
        secureTextEntry={openPass}
      />
      <Button mode="contained" onPress={login}>
        Войти
      </Button>
    </View>
  );
};

export default LoginScreen;
