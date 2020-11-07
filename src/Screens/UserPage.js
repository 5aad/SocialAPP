import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import TopAppBar from '../Components/TopAppBar';
import UserTabs from '../Components/UserTabs';
import UserInfoSection from '../Components/UserInfoSection';
const UserPage = () => {
  return (
    <SafeAreaView style={styles.userPage}>
      <TopAppBar />
      <UserInfoSection />

      {/* Tabs */}
      <UserTabs />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  userPage: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
export default UserPage;
