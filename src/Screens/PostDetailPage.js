import React from 'react';
import {SafeAreaView, Text, StyleSheet, View, ScrollView} from 'react-native';
import {Avatar, Paragraph, Card, Divider, Button} from 'react-native-paper';
import CommentSection from '../Components/CommentSection';
import IconGroup from '../Components/IconGroup';
import TopAppBar from '../Components/TopAppBar';
import UserInfoSection from '../Components/UserInfoSection';

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

const RightCommentSection = () => (
  <View style={styles.right__rankListItem}>
    <View style={styles.nameDate__right__rankListItem}>
      <Text style={styles.name__right__rankListItem}>User Name</Text>
      <Text style={styles.date__right__rankListItem}>.20 days ago</Text>
    </View>
    <Paragraph style={styles.title__right__rankListItem}>
      If you have to in the example activity on your connected device and run
      theMetro bundler
    </Paragraph>
    <IconGroup />
    <Divider />
    <Button mode="Text" onPress={() => console.log('Pressed')}>
      20 Replis
    </Button>
  </View>
);

const PostDetailPage = () => {
  return (
    <SafeAreaView style={styles.postDetail}>
      <TopAppBar />
      <ScrollView>
        <Card
          style={{
            marginVertical: 5,
            marginHorizontal: 16,
          }}>
          <UserInfoSection />

          <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
          <Card.Content>
            <View style={styles.con}>
              <LeftContent />
              <RightContent />
            </View>
            <Divider />
            <IconGroup check="true" />
            <Divider />
            <CommentSection />
            <Divider />
            <View style={styles.con}>
              <LeftContent />
              <RightCommentSection />
            </View>
          </Card.Content>
        </Card>
      </ScrollView>
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
