import React from 'react';
import PostListItem from '../Components/PostListItem';
import {SafeAreaView, Text, StyleSheet, View} from 'react-native';
import TopAppBar from '../Components/TopAppBar';
const UserPage = () => {
  return (
    <SafeAreaView style={styles.userPage}>
      <TopAppBar />

      <Text style={styles.userPage__headings}>User Page</Text>

      {/* Tabs */}
      <PostListItem />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  userPage: {
    flex: 1,
    backgroundColor: '#fff',
  },
  userPage__container: {
    marginHorizontal: 16,
    marginVertical: 10,
  },
  userPage__headings: {
    fontSize: 21,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center',
  },
});
export default UserPage;
