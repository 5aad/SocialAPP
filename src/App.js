import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CategoryPage from './Screens/CategoryPage';

import {useNavigation} from '@react-navigation/native';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="CategoryPage" component={CategoryPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
