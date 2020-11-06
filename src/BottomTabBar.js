import React from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import {AnimatedTabBarNavigator} from 'react-native-animated-nav-tab-bar';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components/native';
import CategoryPage from './Screens/CategoryPage';
import RankingPage from './Screens/RankingPage';
import MainPage from './Screens/MainPage';
import PostPage from './Screens/PostPage';
import UserPage from './Screens/UserPage';
const Tabs = AnimatedTabBarNavigator();

const TabBarIcon = (props) => {
  return (
    <Icon
      name={props.name}
      size={props.size ? props.size : 24}
      color={props.tintColor}
    />
  );
};

export default () => (
  <Tabs.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: '#2a7ff6',
      inactiveTintColor: '#222324',
      activeBackgroundColor: '#fff',
    }}>
    <Tabs.Screen
      name="Home"
      component={MainPage}
      options={{
        tabBarIcon: ({focused, color, size}) => (
          <TabBarIcon
            size={size ? size : 24}
            focused={focused}
            tintColor={color}
            name="home"
          />
        ),
      }}
    />
    <Tabs.Screen
      name="Category"
      component={CategoryPage}
      options={{
        tabBarIcon: ({focused, color, size}) => (
          <TabBarIcon
            size={size ? size : 24}
            focused={focused}
            tintColor={color}
            name="folderopen"
          />
        ),
      }}
    />

    <Tabs.Screen
      name="Ranking"
      component={RankingPage}
      options={{
        tabBarIcon: ({focused, color, size}) => (
          <TabBarIcon
            size={size ? size : 24}
            focused={focused}
            tintColor={color}
            name="barschart"
          />
        ),
      }}
    />

    <Tabs.Screen
      name="Social"
      component={PostPage}
      options={{
        tabBarIcon: ({focused, color, size}) => (
          <TabBarIcon
            focused={focused}
            size={size ? size : 24}
            tintColor={color}
            name="team"
          />
        ),
      }}
    />

    <Tabs.Screen
      name="Favorite"
      component={UserPage}
      options={{
        tabBarIcon: ({focused, color, size}) => (
          <TabBarIcon
            size={size ? size : 24}
            focused={focused}
            tintColor={color}
            name="heart"
          />
        ),
      }}
    />
  </Tabs.Navigator>
);
