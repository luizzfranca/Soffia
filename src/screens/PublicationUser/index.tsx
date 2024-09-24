import { CardComponentComments } from "../../components/CardComponentComments";
import { UserInfo } from "../../components/UserInfo";
import { useNavigation } from "@react-navigation/native";
import {
  ButtonIcon,
  Container,
  ContainerButtonBack,
  ContainerComments,
  Content,
  ContentComments,
  InputComments,
  InputContainer,
  MainTitle,
  TextComments,
  TextNewPublication,
  Title,
} from "./styles";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { KeyboardAvoidingView, Platform } from "react-native";
import { AppNavigatorRoutesProps } from "../../routes/app.routes";

export function PublicationUser() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const commentsData = [
    {
      id: "1",
      text: "Muito bom",
    },
    
    {
      id: "2",
      text: "Onde fica essa empresa?",
    },
    {
      id: "3",
      text: "Gostei",
    },
  ];

  function handleGoBack() {
    navigation.goBack();
  }

  const renderComment = ({ item }: any) => (
    <CardComponentComments comment={item.text} />
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <Container>
        <ContainerButtonBack onPress={handleGoBack}>
          <AntDesign name="arrowleft" size={20} color={"#000"} />
          <TextNewPublication>Publicação</TextNewPublication>
        </ContainerButtonBack>

        <Content>
          <UserInfo name="Luiz Leitão" />
          <MainTitle>Soffia</MainTitle>
          <Title>
            Na Soffia, combinamos tecnologia e inovação para simplificar o
            gerenciamento de plantões, a conexão entre profissionais de saúde e
            oportunidades de trabalho. Nossa plataforma é projetada para
            otimizar o tempo, promover a troca de conhecimentos e fortalecer as
            redes de contato na área da saúde. Soffia, que significa
            "sabedoria", reflete nosso compromisso em criar um ambiente rico em
            conhecimento. Oferecemos uma gama de ferramentas fáceis de usar no
            dia a dia, incluindo um gerenciador de escalas avançado,
            apossibilidade de divulgar vagas disponíveis e conexões com outros
            profissionais. Se você valoriza seu tempo e deseja se conectar com
            os profissionais certos em sua jornada na saúde, a Soffia foi feita
            pensando em você! Descubra todos os benefícios que o app da Soffia
            pode oferecer em: soffia.co
          </Title>
        </Content>

        <ContainerComments>
          <TextComments>Comentários</TextComments>
        </ContainerComments>

        <ContentComments
          data={commentsData}
          keyExtractor={(item: any) => item.id}
          renderItem={renderComment}
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </Container>

      <InputContainer>
        <InputComments
          placeholder="Adicione um comentário"
          placeholderTextColor="#000"
          style={{
            borderTopWidth: 1,
            borderColor: "#cecece",
            padding: 10,
          }}
        />
        <ButtonIcon>
          <MaterialIcons name="send" size={24} color="blue" />
        </ButtonIcon>
      </InputContainer>
    </KeyboardAvoidingView>
  );
}
