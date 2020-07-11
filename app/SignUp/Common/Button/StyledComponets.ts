import styled from 'styled-components/native';
import tailwind from 'tailwind-rn';

export const ButtonFiled = styled.TouchableOpacity`
  ${tailwind(`bg-blue-600 p-4 rounded-md flex-row justify-center items-center`)}
  width:25%
`;

export const ButtonName = styled.Text`
  ${tailwind(`text-white`)}
`;
