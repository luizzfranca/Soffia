import {
  ContainerInfo,
  ContainerNameUser,
  ImageUser,
  UserName,
  TextComment,
} from "./styles";

type Props =  {
  comment: string;
}

export function CardComponentComments({ comment }: Props) {
  return (
    <ContainerInfo>
      <ImageUser
        source={{
          uri: "https://i0.wp.com/blog.dsacademy.com.br/wp-content/uploads/2023/09/Ame-Seu-Leao.png?fit=1344%2C896&ssl=1",
        }}
      />
      <ContainerNameUser>
        <UserName>Lorem Ipsum Dolor</UserName>
        <TextComment>{comment}</TextComment>
      </ContainerNameUser>
    </ContainerInfo>
  );
}
