import React, {Component} from 'react';
import {View, Text, TextInput, Alert, Keyboard} from 'react-native';
import {InputWrapper, InputField} from './styledComponents';
interface InputProps {
  placeHolder: string;
  value: string;
  onChangeText: (text: string) => void;
  style: any;
  keyboardType: string;
  secureTextEntry: boolean;
}

class Input extends Component<InputProps> {
  static defaultProps = {
    placeHolder: 'enter value',
    value: '',
    keyboardType: 'default',
    secureTextEntry: false,
  };
  onChangeText = (text: string) => {
    const {onChangeText} = this.props;
    onChangeText(text);
  };
  render() {
    const {
      onChangeText,
      placeHolder,
      value,
      style,
      keyboardType,
      secureTextEntry,
    } = this.props;
    return (
      <InputField
        onChangeText={this.onChangeText}
        placeholder={placeHolder}
        value={value}
        style={style}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
    );
  }
}

export default Input;
