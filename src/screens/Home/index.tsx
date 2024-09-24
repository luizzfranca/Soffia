import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, FlatList } from "react-native";
import {
  Container,
  ContainerCards,
  ContainerHeader,
  FloatingButton,
  TextStart,
} from "./styles";
import { Feather } from "@expo/vector-icons";
import { CardComponent } from "../../components/CardComponent";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "../../routes/app.routes";
import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";

const API_URL_POSTS = "https://jsonplaceholder.typicode.com/posts";
const API_URL_USERS = "https://jsonplaceholder.typicode.com/users";

export function Home() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const { isAuthenticated, post, setPost } = useAuth();

  useEffect(() => {
    const fetchPostsAndUsers = async () => {
      try {
        const [postsResponse, usersResponse] = await Promise.all([
          axios.get(API_URL_POSTS),
          axios.get(API_URL_USERS),
        ]);

        const postsData = postsResponse.data;
        const usersData = usersResponse.data;

        const postsWithAuthors = postsData.map((post: any) => {
          const author = usersData.find((user: any) => user.id === post.userId);
          return {
            ...post,
            authorName: author?.name,
            authorUsername: author?.username,
            isFavorite: false,
          };
        });

        setPost(postsWithAuthors);
      } catch (error) {
        console.error("Erro ao buscar posts e usuários:", error);
      }
    };

    fetchPostsAndUsers();
  }, []);

  function handleNewPublication() {
    navigation.navigate("newPublication");
  }

  return (
    <Container>
      <ContainerHeader>
        <TextStart>Início</TextStart>
        <Feather name="search" color="#000" size={20} />
      </ContainerHeader>
      <ContainerCards>
        <FlatList
          data={post}
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

      <TouchableOpacity
        style={{ position: "absolute", bottom: 20, right: 20 }}
        onPress={handleNewPublication}
      >
        <FloatingButton>
          <Feather name="plus" size={24} color="#fff" />
        </FloatingButton>
      </TouchableOpacity>
    </Container>
  );
}
