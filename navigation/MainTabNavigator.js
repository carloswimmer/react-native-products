import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import AddScreen from '../screens/AddScreen';


const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

const AboutStack = createStackNavigator({
  Links: AboutScreen,
});

AboutStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const AddEditStack = createStackNavigator({
  Settings: AddScreen,
});

AddEditStack.navigationOptions = {
  tabBarLabel: 'Add',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-add-circle' : 'md-add-circle'}
    />
  ),
};
/*
const EditStack = createStackNavigator({ 
  Edit: {
    screen: EditScreen,
    navigationOptions: ({navigation}) => ({ //don't forget parentheses around the object notation
      title: 'Edit',
      tabBarVisible: false,
      headerLeft: <HeaderBackButton onPress={() => navigation.navigate('HomeStack')} />
    }),
  }
});*/
export default createBottomTabNavigator({
  HomeStack,
  AboutStack,
  AddEditStack,
}
  
);
