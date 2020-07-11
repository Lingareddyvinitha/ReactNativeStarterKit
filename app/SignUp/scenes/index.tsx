import React from 'react';
import {Scene} from 'react-native-router-flux';

import {APP_SCENE} from '../constants/NavigationConstants';

import LaunchScene from './LaunchScene';
import SignUpScene from './SignUpScene';

const scenes = [<Scene initial key={APP_SCENE} component={SignUpScene} />];

const modalScenes: any = [];

export {scenes as default, modalScenes};
