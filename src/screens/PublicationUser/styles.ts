import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const ContainerButtonBack = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 45px;
  gap: 20px;
  margin-left: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #cecece;
  padding: 9px;
`;

export const TextNewPublication = styled.Text`
  font-size: 16px;
  font-weight: 700;
  align-self: center;
  color: #1c1f24;
`;

export const Content = styled.View`
  margin-top: 20px;
  padding: 10px;
`;

export const MainTitle = styled.Text`
  font-weight: 700;
  font-size: 24px;
  color: #1c1f24;
  margin-left: 9px;
  margin-top: 5px;
`;

export const Title = styled.Text`
  margin-top: 10px;
  margin-left: 9px;
  font-weight: 400;
  font-size: 16px;
  color: #1c1f24;
  line-height: 20px;
`;

export const ContainerComments = styled.View`
  border-top-width: 1px;
  border-top-color: #cecece;
  border-bottom-width: 1px;
  border-bottom-color: #cecece;
  padding: 10px;
`;
export const TextComments = styled.Text`
  font-weight: 700;
  font-size: 20px;
  color: #1c1f24;
  margin-left: 10px;
`;

export const ContentComments = styled.FlatList``;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  border-top-width: 1px;
  border-color: #cecece;
  padding: 10px;
`;

export const InputComments = styled.TextInput`
  background-color: #eff1f5;
  padding: 12px;
  border-radius: 8px;
  color: #000;
  width: 96%;
  align-self: center;
  text-align: center;
  margin-bottom: 10px;
`;

export const ButtonIcon = styled.TouchableOpacity`
  right: 60%;
  bottom: 1%;
`;
