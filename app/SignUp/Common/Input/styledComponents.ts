import styled from 'styled-components/native';
import tailwind from 'tailwind-rn';
import Colors from '../../themes/Colors';
export const InputWrapper = styled.View``;

export const InputField = styled.TextInput`
  ${tailwind(` m-2`)}
  background-color: ${Colors.whiteSmoke};
  width:100%
`;
