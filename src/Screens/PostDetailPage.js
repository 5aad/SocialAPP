import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Image,
} from 'react-native';
import {
  List,
  IconButton,
  Avatar,
  useTheme,
  Paragraph,
  Card,
} from 'react-native-paper';
import TopAppBar from '../Components/TopAppBar';

const UserInfo = () => (
  <View>
    <List.Item
      title="Jennifer"
      description="100k follower"
      left={(props) => <Avatar.Text size={54} label="XD" />}
      right={(props) => (
        <View style={{alignItems: 'center'}}>
          <IconButton
            icon="account-plus"
            color="#2a7ff6"
            size={34}
            onPress={() => console.log('Pressed')}
            style={{margin: 0}}
          />
          <Text>follow</Text>
        </View>
      )}
    />
  </View>
);

const CoverImage = () => (
  <View>
    <Image
      source={{
        uri:
          'https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract01.jpg',
      }}
      style={{
        resizeMode: 'cover',
        height: 200,
      }}
    />
  </View>
);

const RightContent = () => (
  <View style={styles.right__rankListItem}>
    <Paragraph style={styles.title__right__rankListItem}>
      If you have to in the example activity on your connected device and run
      theMetro bundler
    </Paragraph>

    <View style={styles.nameDate__right__rankListItem}>
      <Text style={styles.name__right__rankListItem}>User Name</Text>
      <Text style={styles.date__right__rankListItem}>.1k views</Text>
      <Text style={styles.date__right__rankListItem}>.20 days ago</Text>
    </View>
  </View>
);

const LeftContent = (props) => (
  <View>
    <Avatar.Text size={64} label="XD" />
  </View>
);

const PostDetailPage = () => {
  return (
    <SafeAreaView style={styles.postDetail}>
      <TopAppBar />
      <Card
        style={{
          marginVertical: 5,
          marginHorizontal: 16,
        }}>
        <UserInfo />
        <CoverImage />
        <View style={styles.con}>
          <LeftContent />
          <RightContent />
        </View>
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  postDetail: {
    flex: 1,
    backgroundColor: '#fff',
  },
  con: {
    flexDirection: 'row',
    marginTop: 10,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  right__rankListItem: {
    flexShrink: 1,
    flexDirection: 'column',
    marginLeft: 10,
  },
  left__rankListItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  nameDate__right__rankListItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  imgSize__left__rankListItem: {
    width: 80,
    height: 90,
  },
  num__left__rankListItem: {
    paddingVertical: 4,
    paddingHorizontal: 9,
    backgroundColor: '#000',
    borderRadius: 60,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  title__right__rankListItem: {
    fontSize: 12,
    fontWeight: '500',
    justifyContent: 'space-evenly',
  },
  name__right__rankListItem: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date__right__rankListItem: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#d1d1d1',
  },
});

export default PostDetailPage;
