import React from 'react';
import {FlatList, StyleSheet, Text, View, Image} from 'react-native';
import {List, Paragraph, Card, Avatar} from 'react-native-paper';

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
      <Text style={styles.date__right__rankListItem}>.20 days ago</Text>
    </View>
  </View>
);

const LeftContent = (props) => (
  <View style={styles.left__rankListItem}>
    <Text style={styles.num__left__rankListItem}>1</Text>
    <Avatar.Text size={64} label="XD" />
  </View>
);

const Item = ({title}) => (
  <Card style={{marginVertical: 5, marginHorizontal: 16, padding:10}}>
    <View style={styles.con}>
    <LeftContent/>
    <RightContent title={title}/>
    </View>
  </Card>
);

const CategoryListItem = () => {
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
  con:{
   flexDirection:"row"
  },
  right__rankListItem: {
    flexShrink:1,
    flexDirection: 'column',
    marginLeft:10
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
export default CategoryListItem;
