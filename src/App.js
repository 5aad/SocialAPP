import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CategoryPage from './Screens/CategoryPage';
import RankingPage from './Screens/RankingPage';
import BottomTabBar from './BottomTabBar';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="BottomTabBar" component={BottomTabBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
