import React from 'react';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import {View, StyleSheet} from 'react-native';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

const radio_props = [
  {label: 'param1', value: 0},
  {label: 'param2', value: 1},
];
interface RadiobuttonProps {
  radioProps: Object;
}

@observer
class Radiobutton extends React.Component<RadiobuttonProps> {
  @observable value: number = 0;
  onChangeValue = (value: number) => {
    this.value = value;
  };
  render() {
    const {radioProps} = this.props;
    return (
      <View>
        <RadioForm
          radio_props={radioProps}
          initial={0}
          onPress={this.onChangeValue}
          formHorizontal={true}
          buttonColor={'#afaaa4'}
          selectedButtonColor={'#afaaa4'}
          buttonSize={10}
          labelStyle={styles.label}
        />
      </View>
    );
  }
}

export default Radiobutton;

const styles = StyleSheet.create({
  label: {
    color: '#afaaa4',
    margin: 2,
    marginRight: 20,
  },
});
