import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";

const EmailCodeScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");

  const login = async () => {
    if (true) {
    }
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>
        Подтвердите электронную почту
      </Text>
      <Text variant="titleMedium" style={styles.paragraph}>
        На почту {email} отправлено письмо с кодом. Введите его здесь:
      </Text>
      <TextInput
        label="Почта"
        style={styles.input}
        activeUnderlineColor="#A3A3A3"
        underlineColor="#A3A3A3"
        cursorColor="#A3A3A3"
        placeholderTextColor="#A3A3A3"
        value={email}
        placeholder="ivanov@email.com"
        onChangeText={(text) => setEmail(text)}
      />

      {/* <TextInput
        label="Пароль"
        style={styles.input}
        value={password}
        activeUnderlineColor="#A3A3A3"
        underlineColor="#A3A3A3"
        cursorColor="#A3A3A3"
        placeholderTextColor="#A3A3A3"
        placeholder="Введите ваш пароль"
        onChangeText={(text) => setPassword(text)}
        right={
          <TextInput.Icon
            icon="eye"
            onPress={() => setOpenPass((prev) => !prev)}
          />
        }
        secureTextEntry={openPass}
      /> */}
      <Button
        mode="contained"
        buttonColor="#2563EB"
        style={styles.button}
        onPress={login}
      >
        <Text variant="titleSmall" style={styles.buttonText}>
          Получить код
        </Text>
      </Button>
      <Text variant="labelSmall" style={styles.Politic}>
        Нажимая на кнопку вы подтверждаете согласие с{" "}
        <Pressable>
          <Text variant="labelSmall" style={styles.PoliticLink}>
            Политикой конфиденциальности
          </Text>
        </Pressable>
      </Text>
      <View
        style={{
          position: "absolute",
          bottom: 24,
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Text>Уже есть аккаунт? </Text>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={{ color: "#2563EB" }}>Войти</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginVertical: 12,
    backgroundColor: "#00000000",
  },
  buttonText: {
    color: "white",
    fontFamily: "SF-Pro-Regular",
  },
  Politic: {
    paddingVertical: 12,
    fontFamily: "SF-Pro-Regular",
    color: "#737373",
    display: "flex",
  },
  PoliticLink: {
    fontFamily: "SF-Pro-Medium",
    color: "#171717",
  },
  button: {
    height: 50,
  },
});

export default EmailCodeScreen;
