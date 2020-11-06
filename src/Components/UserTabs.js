import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import PostListItem from '../Components/PostListItem';
import UserAbout from './UserAbout';

const initialLayout = {width: Dimensions.get('window').width};
const UserTabs = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Home'},
    {key: 'second', title: 'Favorite'},
    {key: 'third', title: 'About'},
  ]);

  const renderScene = SceneMap({
    first: PostListItem,
    second: PostListItem,
    third: UserAbout,
  });

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

export default UserTabs;
