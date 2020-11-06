import * as React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import App from './src/App';
import CategoryPage from './src/Screens/CategoryPage';
import MainPage from './src/Screens/MainPage';
import PostPage from './src/Screens/PostPage';
import RankingPage from './src/Screens/RankingPage';
import UserPage from './src/Screens/UserPage';

const theme = {
  ...DefaultTheme,
  roundness: 6,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2a7ff6',
    accent: '#222324',
    additional: '#d1d1d1'
  },
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <UserPage/>
    </PaperProvider>
  );
}
