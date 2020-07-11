/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import SignUpPage from '../../components/SignUpPage';
import Images from '../../images';
import I18n from '../../i18n/i18n';

var global: any;
const AppScene = () => {
  return (
    <Fragment>
      <SignUpPage />
    </Fragment>
  );
};

const styles = StyleSheet.create({});

export default SignUpScene;
