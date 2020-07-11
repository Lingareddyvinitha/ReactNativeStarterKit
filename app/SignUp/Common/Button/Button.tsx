import React, {Component} from 'react';
import {ButtonWrapper, ButtonFiled, ButtonName} from './StyledComponets';
class Button extends Component {
  onPress = () => {};
  render() {
    return (
      <ButtonFiled onPress={this.onPress}>
        <ButtonName>Sign Up</ButtonName>
      </ButtonFiled>
    );
  }
}

export default Button;
