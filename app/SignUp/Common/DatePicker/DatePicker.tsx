import React, {Component} from 'react';
import DatePicker from 'react-native-datepicker';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

@observer
export default class MyDatePicker extends Component {
  @observable date: string = '2016-05-15';
  onChangeDate = (date: string) => {
    this.date = date;
  };
  render() {
    return (
      <DatePicker
        style={{width: 100}}
        date={this.date}
        mode="date"
        placeholder="select date"
        format="YYYY/MM/DD"
        customStyles={{
          dateIcon: {
            display: 'none',
          },
          // ... You can check the source to find the other keys.
        }}
        onDateChange={this.onChangeDate}
      />
    );
  }
}
