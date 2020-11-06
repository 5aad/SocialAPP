import React from 'react';
import PostListItem from '../Components/PostListItem';
import {SafeAreaView, Text, StyleSheet, View} from 'react-native';
import TopAppBar from '../Components/TopAppBar';
import {
  List,
  IconButton,
  Avatar,
  useTheme,
  Paragraph,
} from 'react-native-paper';
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
          <View style={{alignItems:"center"}}>
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
