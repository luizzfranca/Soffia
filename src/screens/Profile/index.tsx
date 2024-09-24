import { CardComponent } from "../../components/CardComponent";
import { AppNavigatorRoutesProps } from "../../routes/app.routes";
import {
  Container,
  ContainerButtonBack,
  ContainerInfo,
  ContainerInformationUser,
  ContainerNameUser,
  ContainerPublished,
  ContainerUser,
  ImageUser,
  InfoRow,
  TextBack,
  UserEmail,
  UserInformationAddress,
  UserInformationEmail,
  UserInformationPhone,
  UserInformationWork,
  UserName,
} from "./styles";
import {
  AntDesign,
  Feather,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export function Profile() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <Container>
      <ContainerButtonBack onPress={handleGoBack}>
        <AntDesign name="arrowleft" size={20} color={"#000"} />
        <TextBack>Perfil</TextBack>
      </ContainerButtonBack>

      <ContainerUser>
        <ContainerInfo>
          <ImageUser
            source={{
              uri: "https://i0.wp.com/blog.dsacademy.com.br/wp-content/uploads/2023/09/Ame-Seu-Leao.png?fit=1344%2C896&ssl=1",
            }}
          />
          <ContainerNameUser>
            <UserName>Luiz</UserName>
            <UserEmail>@LuizLeitão</UserEmail>
          </ContainerNameUser>
        </ContainerInfo>
        <ContainerInformationUser>
          <InfoRow>
            <Feather name="mail" size={20} color="#000" />
            <UserInformationEmail>Luiz@gmail.com</UserInformationEmail>
          </InfoRow>

          <InfoRow>
            <FontAwesome name="home" size={20} color="#000" />
            <UserInformationAddress>Rua Armando</UserInformationAddress>
          </InfoRow>

          <InfoRow>
            <FontAwesome name="briefcase" size={20} color="#000" />
            <UserInformationWork>Software Engineer</UserInformationWork>
          </InfoRow>

          <InfoRow>
            <MaterialIcons name="phone" size={20} color="#000" />
            <UserInformationPhone>(85) 996191889</UserInformationPhone>
          </InfoRow>
        </ContainerInformationUser>
      </ContainerUser>
      <ContainerPublished>
        {/* <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent /> */}
      </ContainerPublished>
    </Container>
  );
}
