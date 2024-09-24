import React from "react";
import {
  ContainerIcon,
  ContainerInfo,
  ContainerNameUser,
  ImageUser,
  UserEmail,
  UserName,
} from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { useAuth } from "../../contexts/AuthContext";

interface UserInfoProps {
  name: string;
  username?: string;
  postId?: string;
  isFavorite?: boolean;
}

export function UserInfo({
  name,
  username,
  postId,
  isFavorite,
}: UserInfoProps) {
  const { isAuthenticated, post, setPost } = useAuth();

  const handleFavorites = () => {
    const posts = post.map((item: any) => {
      if (item.id === postId) {
        return { ...item, isFavorite: !item.isFavorite };
      }
      return item;
    });
    setPost(posts);
  };

  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name
  )}&background=0D8ABC&color=fff`;

  return (
    <ContainerInfo>
      <ImageUser
        source={{
          uri: avatarUrl,
        }}
      />
      <ContainerNameUser>
        <UserName>{name}</UserName>

        <UserEmail>{username}</UserEmail>
      </ContainerNameUser>
      <ContainerIcon>
        <FontAwesome
          onPress={handleFavorites}
          name="star-o"
          size={20}
          color={isFavorite ? "#F5C035" : "#5E6064"}
        />
      </ContainerIcon>
    </ContainerInfo>
  );
}
