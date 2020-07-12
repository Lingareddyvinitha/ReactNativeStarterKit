import React, {Component} from 'react';
import {View, Text, Alert, TextInput, StyleSheet, CheckBox} from 'react-native';
import I18n from '../../i18n/i18.json';
import {
  Heading,
  SignUpWrapper,
  SignUpMessage,
  NameField,
  SelectYourGender,
  GenderWrapper,
  BranchWrapper,
  SelectYourBranch,
  DateWrapper,
  DateLable,
  BranchAndDateWrapper,
  AddressWrapper,
  AddressLable,
  Address,
  TypeSpeedWrapper,
  TypeSpeedLable,
  ConditionsWrapper,
  ConditionDescription,
  ButtonWrapper,
  SignUpPageWrapper,
  ColorPickerWrapper,
} from './styledComponents';
import Input from '../../Common/Input';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import {InputField} from '../../Common/Input/styledComponents';
import {RadioButton} from '../../Common/RadioButton';
import {PickerComponent} from '../../Common/PickerComponent';
import {DatePicker} from '../../Common/DatePicker';
import Slider from '../../Common/Slider';
import {Button} from '../../Common/Button';
import {ColorPicker} from '../../Common/ColorPicker';

@observer
class SignUpPage extends Component {
  @observable firstName: string = '';
  @observable lastName: string = '';
  @observable mobileNumber: string = '';
  @observable email = '';
  @observable password = '';
  @observable confirmPassword = '';
  @observable address = '';
  @observable isSelected = false;

  onChangeFirstName = (text: string) => {
    this.firstName = text;
  };
  onChangeLastName = (text: string) => {
    this.lastName = text;
  };
  onChangeMobileNumber = (text: string) => {
    this.mobileNumber = text;
  };
  onChangeEmail = (text: string) => {
    this.email = text;
  };
  onChangePassword = (text: string) => {
    this.password = text;
  };
  onChangeConfirmPassword = (text: string) => {
    this.password = text;
  };
  onChangeAddress = (text: string) => {
    this.address = text;
  };
  onChangeIsSelected = () => {
    this.isSelected = !this.isSelected;
  };
  render() {
    return (
      <SignUpPageWrapper>
        <ColorPickerWrapper>
          <ColorPicker />
        </ColorPickerWrapper>

        {/* <SignUpWrapper>
          <Heading>{I18n.signUp}</Heading>
          <SignUpMessage>
            {I18n.pleaseFillThisFormToCreateAnAccount}
          </SignUpMessage>
          <NameField>
            <Input
              onChangeText={this.onChangeFirstName}
              value={this.firstName}
              placeHolder={I18n.firstName}
              style={signUpPage.firstName}
            />
            <Input
              onChangeText={this.onChangeLastName}
              value={this.lastName}
              placeHolder={I18n.lastName}
              style={signUpPage.lastName}
            />
          </NameField>
          <Input
            onChangeText={this.onChangeMobileNumber}
            value={this.mobileNumber}
            placeHolder={I18n.mobileNumber}
            style={signUpPage.mobileNumber}
            keyboardType="numeric"
          />
          <Input
            onChangeText={this.onChangeMobileNumber}
            value={this.email}
            placeHolder={I18n.email}
            style={signUpPage.email}
          />
          <Input
            onChangeText={this.onChangePassword}
            value={this.password}
            placeHolder={I18n.password}
            style={signUpPage.password}
            secureTextEntry={true}
          />
          <Input
            onChangeText={this.onChangeConfirmPassword}
            value={this.confirmPassword}
            placeHolder={I18n.confirmPassword}
            style={signUpPage.confirmPassword}
            secureTextEntry={true}
          />
          <GenderWrapper>
            <SelectYourGender>{I18n.selectYourGender}</SelectYourGender>
            <RadioButton
              radioProps={[
                {label: I18n.male, value: 0},
                {label: I18n.female, value: 1},
                {label: I18n.other, value: 2},
              ]}
            />
          </GenderWrapper>
          <BranchAndDateWrapper>
            <BranchWrapper>
              <SelectYourBranch>{I18n.selectYourBranch}</SelectYourBranch>
              <PickerComponent />
            </BranchWrapper>
            <DateWrapper>
              <DateLable>{I18n.dob}</DateLable>
              <DatePicker />
            </DateWrapper>
          </BranchAndDateWrapper>
          <AddressWrapper>
            <AddressLable>{I18n.enterYourAddress}</AddressLable>
            <Address
              placeholder={I18n.typeYourAddress}
              value={this.address}
              onChangeText={this.onChangeAddress}
            />
          </AddressWrapper>
          <TypeSpeedWrapper>
            <TypeSpeedLable>{I18n.setYourTypingSpeed}</TypeSpeedLable>
            <Slider />
          </TypeSpeedWrapper>
          <ConditionsWrapper>
            <CheckBox
              value={this.isSelected}
              onValueChange={this.onChangeIsSelected}
            />
            <ConditionDescription>
              {I18n['iAcceptTheTermsOfUse&PrivacyPolicy']}
            </ConditionDescription>
          </ConditionsWrapper>
          <ButtonWrapper>
            <Button />
          </ButtonWrapper>
        </SignUpWrapper> */}
      </SignUpPageWrapper>
    );
  }
}

export default SignUpPage;

const signUpPage = StyleSheet.create({
  firstName: {
    flex: 1,
  },
  lastName: {
    flex: 1,
  },
  mobileNumber: {},
  email: {},
  password: {},
  confirmPassword: {},
});
