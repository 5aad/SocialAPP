import React from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Card, List} from 'react-native-paper';

const Data = [
  {
    id: '1',
    title: 'First Item',
    iconName: 'folder',
  },
  {
    id: '2',
    title: 'Second Item',
    iconName: 'folder',
  },
  {
    id: '3',
    title: 'Third Item',
    iconName: 'folder',
  },
];

const Item = ({title, iconName}) => (
  <Card style={{marginVertical: 5, marginHorizontal: 16}}>
    <List.Item
      title={title}
      left={(...props) => <List.Icon icon={iconName} />}
    />
  </Card>
);

const CategoryListItem = () => {
  const renderItem = ({item}) => (
    <Item title={item.title} iconName={item.iconName} />
  );
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
  },
});
export default CategoryListItem;
