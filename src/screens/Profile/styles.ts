import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #EFF1F5;
`;

export const ContainerButtonBack = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 45px;
  gap: 20px;
  margin-left: 20px;
`;

export const ContainerUser = styled.View`
    background-color: #fff;
    border-radius: 0px 0px 16px 16px;
    margin-top: 10px;
    padding: 10px;
`;

export const TextBack = styled.Text`
  font-size: 16px;
  font-weight: 700;
  align-self: center;
  color: #1c1f24;
`;

export const ContainerInfo = styled.View`
  flex-direction: row;
  margin-left: 20px;
  margin-top: 30px;
  
`;
export const ImageUser = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 67px;
`;
export const ContainerNameUser = styled.View`
  margin-left: 5px;
  margin-top: 10px;
`;

export const ContainerIcon = styled.View`
  margin-right: 10px;
`;

export const UserName = styled.Text`
  font-weight: 700;
  font-size: 16px;
  color: #1c1f24;
`;
export const UserEmail = styled.Text`
  font-weight: 400;
  font-size: 14px;
  color: #5e6064;
`;

export const ContainerInformationUser = styled.View`
    margin-left: 20px;
`;

export const InfoRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const UserInformationEmail = styled.Text`
  font-size: 14px;
  color: #5e6064;
  margin-left: 10px;
`;

export const UserInformationAddress = styled.Text`
  font-size: 14px;
  color: #5e6064;
  margin-left: 10px;
`;

export const UserInformationWork = styled.Text`
  font-size: 14px;
  color: #5e6064;
  margin-left: 10px;
`;

export const UserInformationPhone = styled.Text`
  font-size: 13px;
  color: #5e6064;
  margin-left: 10px;
`;

export const ContainerPublished = styled.View`
  margin-top: 10px;
  padding: 10px;
`;