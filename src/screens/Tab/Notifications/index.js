import React from 'react';
import { View, Text, SafeAreaView  } from 'react-native';
import {Appbar , Headline} from 'react-native-paper';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import {MapScreen } from './MapScreen';
// import {MapListScreen} from './MapListScreen';
import {setNavigator} from './navigationRef';
// import {MapScreen } from './src/screens/Tab/Notifications/MapScreen';
//import {MapListScreen} from './src/screens/Tab/Notifications/MapListScreen';
//import {setNavigator} from './src/screens/Tab/Notifications/navigationRef';

const switchNavigator =createSwitchNavigator ({
  mainFlow: createBottomTabNavigator({
    MapView: MapScreen,
    MapList: MapListScreen
  })
})

const Notifications = createAppContainer(switchNavigator)


 import styles from '../../../../styles';
import MapScreen from './MapScreen';
import MapListScreen from './MapListScreen';

export default () => {
    return (
      <Notifications
      ref={navigator => {
        setNavigator(navigator)
      }}
      />              
    )           
}


