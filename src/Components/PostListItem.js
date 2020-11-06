import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import {Paragraph, Card, Avatar, IconButton,  Menu, Divider,} from 'react-native-paper';

const Data = [
  {
    id: '1',
    title:
      'If you have to change Android native code, you must have a look at the code in the example activity on your connected device and run theMetro bundler',
  },
  {
    id: '2',
    title:
      'If you have to  in the example activity on your connected device and run theMetro bundler',
  },
  {
    id: '3',
    title:
      'If you have to change Android native code, you must have a  connected device and run theMetro bundler',
  },
  {
    id: '4',
    title:
      'If you have to change Android native code, you must have a look at the  on your connected device and run bundler',
  },
  {
    id: '5',
    title:
      'If you have to change Android native code, you must  at the  on your connected device and run theMetro bundler',
  },
];

const RightContent = ({title}) => (
  <View style={styles.right__rankListItem}>
    <Paragraph style={styles.title__right__rankListItem}>{title}</Paragraph>

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

const CoverImage = () => (
  <View style={{flex: 1}}>
    <ImageBackground
      source={{
        uri:
          'https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract01.jpg',
      }}
      style={{flex: 1, resizeMode: 'cover', height: 300}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          marginTop: 10,
          marginLeft: 10,
        }}>
        <Image
          source={{
            uri:
              'https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract01.jpg',
          }}
          style={{
            width: 50,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: '#fff',
            borderRadius: 30,
          }}
        />
      </View>
    </ImageBackground>
  </View>
);

const Item = ({title}) => {
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  return (
    <Card
      style={{
        marginVertical: 5,
        marginHorizontal: 16,
      }}>
      <CoverImage />
      <View style={styles.con}>
        <LeftContent />
        <RightContent title={title} />
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <IconButton
              icon="dots-vertical"
              color="#000"
              size={16}
              onPress={openMenu}
            />
          }>
          <Menu.Item onPress={() => {}} title="Item 1" />
          <Menu.Item onPress={() => {}} title="Item 2" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Item 3" />
        </Menu>
      </View>
    </Card>
  );
};
const PostListItem = () => {
  const [visible, setVisible] = React.useState(false);
  const renderItem = ({item}) => <Item title={item.title} />;
  return (
    <View style={styles.container}>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  con: {
    flexDirection: 'row',
    marginTop: 10,
    paddingLeft: 10,
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
export default PostListItem;
