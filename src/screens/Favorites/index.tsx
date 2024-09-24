import { FlatList, Text } from "react-native";
import {
  Container,
  ContainerCards,
  ContainerHeader,
  TextStart,
} from "./styles";

import { Feather } from "@expo/vector-icons";
import { CardComponent } from "../../components/CardComponent";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect, useState } from "react";

export function Favorites() {
  const { post } = useAuth();

  const favorites = post.filter((item: any) => item.isFavorite) || null;

  return (
    <Container>
      <ContainerHeader>
        <TextStart>Favoritos</TextStart>
        <Feather name="search" color="#000" size={20} />
      </ContainerHeader>
      <ContainerCards>
        <FlatList
          data={favorites}
          keyExtractor={(item: any) => String(item.id)}
          renderItem={({ item }) => (
            <CardComponent
              key={item.id}
              title={item.title}
              body={item.body}
              user={{
                name: item.authorName,
                username: item.authorUsername,
                postId: item.id,
                isFavorite: item.isFavorite,
              }}
            />
          )}
        />
      </ContainerCards>
    </Container>
  );
}
