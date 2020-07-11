import React, {Component} from 'react';
import Slider from '@react-native-community/slider';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import {Alert, View, Text} from 'react-native';
import {SliderWrapper, SliderValue} from './styledComponents';
@observer
class SliderComponent extends Component {
  @observable value: number = 0;
  onValueChange = (value: number) => {
    this.value = value;
  };
  render() {
    return (
      <SliderWrapper>
        <Slider
          style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="grey"
          maximumTrackTintColor="#000000"
          onValueChange={this.onValueChange}
        />
        <SliderValue>{this.value}</SliderValue>
      </SliderWrapper>
    );
  }
}

export default SliderComponent;
