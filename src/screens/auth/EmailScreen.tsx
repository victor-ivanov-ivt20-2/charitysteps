import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";

const EmailScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openPass, setOpenPass] = useState(true);

  const login = async () => {
    if (true) {
    }
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>
        Регистрация
      </Text>
      <Text variant="titleMedium" style={styles.paragraph}>
        Введите электронную почту, чтобы получить код подтверждения
      </Text>
      <TextInput
        label="Почта"
        style={styles.input}
        value={email}
        placeholder="ivanov@email.com"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        label="Пароль"
        style={styles.input}
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

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  title: {
    paddingVertical: 12,
    marginTop: 42,
    fontFamily: "SF-Pro-Bold",
  },
  paragraph: {
    paddingVertical: 12,
    fontFamily: "SF-Pro-Regular",
    color: "#737373",
  },
  input: {
    paddingVertical: 12,
    backgroundColor: "#00000000",
  },
});

export default EmailScreen;
