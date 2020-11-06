import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import RankListItem from '../Components/RankListItem';

const initialLayout = {width: Dimensions.get('window').width};
const RankTabs = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Daily'},
    {key: 'second', title: 'Monthly'},
    {key: 'third', title: 'All Time'},
  ]);

  const renderScene = SceneMap({
    first: RankListItem,
    second: RankListItem,
    third: RankListItem,
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

export default RankTabs;
