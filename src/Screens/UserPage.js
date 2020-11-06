import React from 'react';
import {SafeAreaView, Text, StyleSheet, View} from 'react-native';
import TopAppBar from '../Components/TopAppBar';
import {List, IconButton, Avatar, useTheme} from 'react-native-paper';
import UserTabs from '../Components/UserTabs';
const UserPage = () => {
  const {colors} = useTheme();
  return (
    <SafeAreaView style={styles.userPage}>
      <TopAppBar />

      <List.Item
        title="Jennifer"
        description="100k follower"
        left={(props) => <Avatar.Text size={54} label="XD" />}
        right={(props) => (
          <View style={{alignItems: 'center'}}>
            <IconButton
              icon="account-plus"
              color={colors.primary}
              size={34}
              onPress={() => console.log('Pressed')}
              style={{margin: 0}}
            />
            <Text>follow</Text>
          </View>
        )}
      />

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
