import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useToast } from "react-native-toast-notifications";
import {
  ButtonCreateNewAccount,
  ButtonEnter,
  Container,
  ContainerInput,
  InputEmail,
  InputPassword,
  TextCreateNewAccount,
  TextEmail,
  TextEnter,
  TextLogin,
  TextPassword,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useAuth } from "../../contexts/AuthContext";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("E-mail inválido")
    .required("O campo e-mail é obrigatório"),
  password: Yup.string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .required("O campo senha é obrigatório"),
});

export function Login() {
  const navigation = useNavigation<any>();
  const toast = useToast();
  const { setIsAuthenticated, setUser } = useAuth();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleLogin(data: { email: string; password: string }) {
    if (data.email === "teste@gmail.com" && data.password === "123456") {
      toast.show("Login bem-sucedido!", {
        type: "success",
        placement: "top",
      });
      setIsAuthenticated(true);
      setUser({
        authorName: 'Luiz',
        authorUsername: 'Leitão',
      });
      navigation.navigate("home");
    } else {
      toast.show("Usuário não encontrado", {
        type: "danger",
        placement: "top",
      });
    }
  }

  function handleNewAccount() {
    navigation.navigate("signUp");
  }

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  return (
    <Container>
      <TextLogin>Soffia</TextLogin>

      <ContainerInput>
        <TextEmail>Email</TextEmail>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <InputEmail
              placeholder="Endereço de e-mail"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.email && (
          <Text style={{ color: "red" }}>{errors.email.message}</Text>
        )}

        <TextPassword>Senha</TextPassword>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <InputPassword
                placeholder="Senha"
                secureTextEntry={!isPasswordVisible}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={{ width: "100%" }}
              />
            )}
          />

          <TouchableOpacity onPress={togglePasswordVisibility}>
            <AntDesign
              name={isPasswordVisible ? "eyeo" : "eye"}
              size={24}
              color="gray"
              style={{ right: 30 }}
            />
          </TouchableOpacity>
        </View>
        {errors.password && (
          <Text style={{ color: "red" }}>{errors.password.message}</Text>
        )}

        <ButtonEnter onPress={handleSubmit(handleLogin)}>
          <TextEnter>Entrar</TextEnter>
        </ButtonEnter>

        <ButtonCreateNewAccount onPress={handleNewAccount}>
          <TextCreateNewAccount>Criar nova conta</TextCreateNewAccount>
        </ButtonCreateNewAccount>
      </ContainerInput>
    </Container>
  );
}
