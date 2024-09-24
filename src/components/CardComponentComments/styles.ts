import styled from "styled-components/native";

export const ContainerInfo = styled.View`
  flex-direction: row;
  margin-left: 10px;
  gap: 2px;
  border-bottom-width: 1px;
  border-bottom-color: #cecece;
  margin-bottom: 10px;
  padding: 5px;
`;
export const ImageUser = styled.Image`
  width: 24px;
  height: 24px;
  border-radius: 20px;
`;
export const ContainerNameUser = styled.View`
  flex: 1;
  margin-left: 5px;
`;

export const UserName = styled.Text`
  font-weight: 400;
  font-size: 16px;
  color: #1c1f24;
  margin-bottom: 2px;
`;

export const TextComment = styled.Text`
  font-weight: 600;
  font-size: 14px;
  color: #1c1f24;
`;
