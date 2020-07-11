/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import React, {Fragment} from 'react';
// import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';

// import NavigationRouter from './app/navigation/NavigationRouter';

// const App = () => {
//   return (
//     <Fragment>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView style={styles.body}>
//         <NavigationRouter />
//       </SafeAreaView>
//     </Fragment>
//   );
// };

// const styles = StyleSheet.create({
//   body: {
//     flex: 1,
//   },
// });

// export default App;
import React, {Fragment} from 'react';
import {SafeAreaView, StyleSheet, StatusBar, Text} from 'react-native';
import SignUpPage from './app/SignUp/components/SignUpPage';

import NavigationRouter from './app/SignUp/navigation/NavigationRouter';
import Scenes from './app/SignUp/components/SignUpPage';
const App = () => {
  return <SignUpPage />;
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});

export default App;
// import React, {Component, useState} from 'react';
// import {
//   Button,
//   StyleSheet,
//   View,
//   Alert,
//   Text,
//   TextInput,
//   ScrollView,
//   Switch,
//   Picker,
// } from 'react-native';
// import {observable} from 'mobx';
// import {observer} from 'mobx-react';

// @observer
// class App extends Component {
//   @observable value = 'ac';
//   @observable isEnabled = false;
//   @observable selectedValue = 'React';
//   onChangeValue = (value: string) => {
//     this.value = value;
//   };
//   toggleSwitch = () => {
//     this.isEnabled = !this.isEnabled;
//   };
//   onChangeValuePicker = (itemValue: string, itemPosition: number) => {
//     this.selectedValue = itemValue;
//   };
//   render() {
//     return (
//       <ScrollView style={container}>
//         <Text style={list.name}>Chitra</Text>
//         <View style={list.button}>
//           <Button
//             onPress={() => Alert.alert('i am clickable')}
//             title="click Me!"
//           />
//         </View>
//         <View style={list.bottonFlex}>
//           <Button onPress={() => Alert.alert('wer')} title="right" />
//           <Button onPress={() => Alert.alert('hi')} title="left" />
//         </View>
//         <View style={list.switchContainer}>
//           <Switch
//             trackColor={{false: 'red', true: 'green'}}
//             thumbColor={this.isEnabled ? '#f5dd4b' : '#f4f3f4'}
//             onValueChange={this.toggleSwitch}
//             value={this.isEnabled}
//           />
//         </View>
//         <View style={list.picker}>
//           <Picker
//             style={{height: 40, width: 200, backgroundColor: 'pink'}}
//             selectedValue={this.selectedValue}
//             onValueChange={this.onChangeValuePicker}>
//             <Picker.Item label="React" value="react" />
//             <Picker.Item label="React-Native" value="react-native" />
//           </Picker>
//         </View>
//       </ScrollView>
//     );
//   }
// }

// export default App;

// const list = StyleSheet.create({
//   container: {
//     flex: 1,

//     backgroundColor: '#eaeaea',
//   },
//   name: {
//     paddingVertical: 8,
//     borderColor: 'black',
//     borderWidth: 3,
//     fontWeight: 'bold',
//     justifyContent: 'center',
//     textAlign: 'center',
//     backgroundColor: 'aquamarine',
//     width: 60,
//   },
//   button: {
//     height: 50,
//     color: 'red',
//   },
//   bottonFlex: {
//     margin: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   switchContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   picker: {
//     flex: 1,
//     alignItems: 'center',
//     paddingTop: 40,
//   },
// });

// const page = StyleSheet.create({
//   container: {
//     backgroundColor: 'white',
//   },
// });

// const container = StyleSheet.compose(list.container, page.container);

// import React, {Component} from 'react';
// import {
//   SafeAreaView,
//   View,
//   FlatList,
//   StyleSheet,
//   Text,
//   StatusBar,
//   Alert,
//   ActivityIndicator,
//   Button,
//   TouchableOpacity,
// } from 'react-native';
// import {observer} from 'mobx-react';
// import {observable} from 'mobx';

// interface itemObj {
//   item: {id: string; title: string};
// }
// interface titleObj {
//   id: string;
//   title: string;
// }

// const DATA: Array<titleObj> = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
// ];

// const Item = (props: {title: string}) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{props.title}</Text>
//   </View>
// );

// @observer
// class App extends Component {
//   @observable isLoading = true;
//   renderItem = ({item}: itemObj) => {
//     return <Item title={item.title} />;
//   };
//   render() {
//     return (
//       <SafeAreaView style={styles.container}>
//         <FlatList
//           data={DATA}
//           renderItem={this.renderItem}
//           keyExtractor={item => item.id}
//         />
//         <TouchableOpacity>
//           <ActivityIndicator />
//         </TouchableOpacity>
//       </SafeAreaView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
// });

// export default App;
