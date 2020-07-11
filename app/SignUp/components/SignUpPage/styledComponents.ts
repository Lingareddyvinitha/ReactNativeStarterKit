import React from 'react';
import styled from 'styled-components/native';
import tailwind from 'tailwind-rn';
import InputFiled from '../../Common/Input';
import InputField from '../../Common/Input';

export const SignUpWrapper = styled.ScrollView`
  ${tailwind(``)}
`;

export const Heading = styled.Text`
  ${tailwind(`font-bold text-2xl mt-6 m-1`)}
`;

export const SignUpMessage = styled.Text`
  ${tailwind(`text-gray-600
  border-gray-600 border-b m-1 p-1`)}
`;
export const NameField = styled.View`
  ${tailwind(` flex-row justify-between `)}
`;

export const OtherDetails = styled.View`
  ${tailwind(`flex flex-row`)}
`;

export const GenderWrapper = styled.View`
  ${tailwind(`flex-1 flex-row justify-around m-2`)}
`;

export const SelectYourGender = styled.Text`
  color: #afaaa4;
`;

export const BranchAndDateWrapper = styled.View`
  ${tailwind(`flex-1 flex-row justify-between items-center m-2`)}
`;

export const BranchWrapper = styled.View`
  ${tailwind(`flex-1 flex-row items-baseline`)}
`;

export const SelectYourBranch = styled.Text`
  color: #afaaa4;
  width: 50%;
`;

export const DateLable = styled.Text`
  color: #afaaa4;
`;

export const DateWrapper = styled.View`
  ${tailwind(`flex-1 flex-row justify-center items-center`)}
`;

export const AddressWrapper = styled.View`
  ${tailwind(`flex-1 flex-row items-center`)}
`;

export const AddressLable = styled.Text`
  color: #afaaa4;
`;

export const Address = styled.TextInput`
  ${tailwind('flex-1')}
  border: 1px solid grey;
  margin: 2px;
`;

export const TypeSpeedWrapper = styled.View`
  ${tailwind(`flex-1 flex-row items-center m-2`)}
`;

export const TypeSpeedLable = styled.Text`
  color: #afaaa4;
  width: 50%;
`;

export const ConditionsWrapper = styled.View`
  ${tailwind(`flex-1 flex-row items-center m-2`)}
`;
export const ConditionDescription = styled.Text`
  color: #afaaa4;
`;

export const ButtonWrapper = styled.View`
  ${tailwind(`flex-row flex-1 justify-center`)}
`;
