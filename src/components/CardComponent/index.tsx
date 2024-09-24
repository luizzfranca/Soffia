import React from "react";
import { UserInfo } from "../UserInfo";
import { Container, MainTitle, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "../../routes/app.routes";

interface CardComponentProps {
  title: string;
  body: string;
  user: {
    name: string;
    username: string;
    postId: string;
    isFavorite: boolean;
  };
}

export function CardComponent({ title, body, user }: CardComponentProps) {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const handlePublicationUser = () => {
    navigation.navigate("publicationUser");
  };
  

  return (
    <Container onPress={handlePublicationUser}>
      <UserInfo
        name={user.name}
        username={user.username}
        postId={user.postId}
        isFavorite={user.isFavorite}
      />

      <MainTitle>{title}</MainTitle>
      <Title numberOfLines={3}>{body}</Title>
    </Container>
  );
}
