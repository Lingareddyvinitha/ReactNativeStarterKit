import React, {Component} from 'react';
import {ColorPicker, toHsv} from 'react-native-color-picker';
import {observer} from 'mobx-react';
import {observable} from 'mobx';
import {StyleSheet, TextInput, Text, View} from 'react-native';

@observer
class ColorPickerComponent extends Component {
  @observable color: any = 'black';
  onChangeColor = (color: any) => {
    this.color = color;
  };
  onColorSelector = (color: any) => {
    this.color = color;
  };
  render() {
    return (
      <View>
        <ColorPicker
          onColorSelected={this.onColorSelector}
          onColorChange={this.onChangeColor}
          style={{width: 150, height: 150}}
        />
      </View>
    );
  }
}

export default ColorPickerComponent;

const style = StyleSheet.create({
  color: {
    backgroundColor: 'pink',
  },
});
