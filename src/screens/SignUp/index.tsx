import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useToast } from "react-native-toast-notifications";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "../../routes/auth.routes";

import {
  ButtonCreateNewAccount,
  Container,
  ContainerButtonBack,
  ContainerInput,
  InputEmail,
  InputNameUser,
  InputPassword,
  TextBack,
  TextCreateNewAccount,
  TextEmail,
  TextNameUser,
  TextPassword,
} from "./styles";
import { Text, TouchableOpacity, View } from "react-native";

// Validação com Yup
const schema = Yup.object().shape({
  username: Yup.string()
    .min(3, "O nome de usuário deve ter mais de 3 caracteres")
    .required("O nome de usuário é obrigatório"),
  email: Yup.string()
    .email("E-mail inválido")
    .required("O e-mail é obrigatório"),
  password: Yup.string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .required("A senha é obrigatória"),
});

export function SignUp() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  const toast = useToast();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [passwordVisible, setPasswordVisible] = useState(false);

  function handleSignUp(data: {
    username: string;
    email: string;
    password: string;
  }) {
    toast.show("Conta criada com sucesso!", { type: "success" });
  }

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <ContainerButtonBack onPress={handleGoBack}>
        <AntDesign name="arrowleft" size={20} color={"#000"} />
        <TextBack>Criar nova conta</TextBack>
      </ContainerButtonBack>

      <ContainerInput>
        <TextNameUser>Nome de usuário</TextNameUser>
        <Controller
          control={control}
          name="username"
          render={({ field: { onChange, onBlur, value } }) => (
            <InputNameUser
              placeholder="Nome de usuário"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.username && (
          <Text style={{ color: "red" }}>{errors.username.message}</Text>
        )}

        <TextEmail>E-mail</TextEmail>
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
                placeholder="Adicione uma senha"
                secureTextEntry={!passwordVisible}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={{ width: "100%" }}
              />
            )}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <AntDesign
              name={passwordVisible ? "eye" : "eyeo"}
              size={24}
              color="gray"
              style={{ right: 30 }}
            />
          </TouchableOpacity>
        </View>
        {errors.password && (
          <Text style={{ color: "red" }}>{errors.password.message}</Text>
        )}

        <ButtonCreateNewAccount onPress={handleSubmit(handleSignUp)}>
          <TextCreateNewAccount>Criar conta</TextCreateNewAccount>
        </ButtonCreateNewAccount>
      </ContainerInput>
    </Container>
  );
}
