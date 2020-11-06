import React from 'react';
import PostListItem from '../Components/PostListItem';
import {SafeAreaView, Text, StyleSheet, View} from 'react-native';
import TopAppBar from '../Components/TopAppBar';
const MainPage = () => {
  return (
    <SafeAreaView style={styles.mainPage}>
      <TopAppBar />

      <PostListItem />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainPage: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default MainPage;
