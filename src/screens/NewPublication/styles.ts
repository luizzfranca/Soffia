import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #fff;
  margin-top: 50px;
`;

export const ContainerButtonBack = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 45px;
  gap: 20px;
  margin-left: 20px;
`;

export const ContainerBorder = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #cecece;
  margin-top: 20px;
`;

export const TextNewPublication = styled.Text`
  font-size: 16px;
  font-weight: 700;
  align-self: center;
  color: #1c1f24;
`;

export const ContainerInput = styled.View`
  width: 90%;
  gap: 20px;
  margin-top: 50px;
  margin-left: 10px;
  padding: 10px;
`;

export const TitlePublication = styled.Text`
  font-weight: 400;
  font-size: 16px;
  color: #1c1f24;
`;
export const InputTitlePublication = styled.TextInput`
  background-color: #eff1f5;
  padding: 12px;
  border-radius: 8px;
  color: #a9aeb7;
`;

export const TextPublication = styled.Text`
  font-weight: 400;
  font-size: 16px;
  color: #1c1f24;
`;
export const InputTextPublication = styled.TextInput.attrs({
  multiline: true,
  textAlignVertical: "top",
})`
  background-color: #eff1f5;
  padding: 12px;
  border-radius: 10px;
  color: #a9aeb7;
  height: 300px;
`;

export const ButtonPublished = styled.TouchableOpacity`
  width: 100%;
  align-self: center;
  margin-top: 5px;
  background-color: #0f90d9;
  padding: 15px;
  border-radius: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export const TextPublished = styled.Text`
  text-align: center;
  font-weight: 700;
  font-size: 16px;
  color: #fff;
`;
