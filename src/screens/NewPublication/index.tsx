import React, { useState } from "react";
import {
  ButtonPublished,
  Container,
  ContainerBorder,
  ContainerButtonBack,
  ContainerInput,
  InputTextPublication,
  InputTitlePublication,
  TextNewPublication,
  TextPublication,
  TextPublished,
  TitlePublication,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { AppNavigatorRoutesProps } from "../../routes/app.routes";
import axios from "axios";
import { Alert } from "react-native"; // para mostrar feedback ao usuário
import { useAuth } from "../../contexts/AuthContext";

export function NewPublication() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");

  const { isAuthenticated, post, setPost, user } = useAuth();

  function handleGoBack() {
    navigation.goBack();
  }

  async function handlePublish() {
    if (title === "" || body === "") {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title: title,
          body: body,
          userId: userId,
        }
      );

      post.push({ ...response.data, ...user });
      Alert.alert("Sucesso", "Publicação realizada com sucesso!");
      navigation.goBack();
    } catch (error) {
      Alert.alert("Erro", "Ocorreu um erro ao tentar publicar.");
      console.error(error);
    }
  }

  return (
    <Container>
      <ContainerButtonBack onPress={handleGoBack}>
        <AntDesign name="close" size={20} color={"#000"} />
        <TextNewPublication>Nova publicação</TextNewPublication>
      </ContainerButtonBack>

      <ContainerBorder></ContainerBorder>

      <ContainerInput>
        <TitlePublication>Título da publicação</TitlePublication>

        <InputTitlePublication
          placeholder="Adicione um título"
          value={title}
          onChangeText={setTitle}
        />

        <TextPublication>Texto da publicação</TextPublication>

        <InputTextPublication
          placeholder="O que gostaria de compartilhar?"
          value={body}
          onChangeText={setBody}
        />

        <ButtonPublished onPress={handlePublish}>
          <Feather name="send" size={15} color={"#fff"} />
          <TextPublished>Publicar</TextPublished>
        </ButtonPublished>
      </ContainerInput>
    </Container>
  );
}
