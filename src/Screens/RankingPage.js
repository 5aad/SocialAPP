import React from 'react';
import {SafeAreaView, Text, StyleSheet, View} from 'react-native';
import CategoryDropdown from '../Components/CategoryDropdown';
import RankListItem from '../Components/RankListItem';
import TopAppBar from '../Components/TopAppBar';

const RankingPage = () => {
  return (
    <SafeAreaView style={styles.rankingPage}>
      <TopAppBar />
      <View style={styles.rankingPage__container}>
        <Text style={styles.rankingPage__headings}>Most Viewed Post</Text>
        {/* DropDown */}
        <CategoryDropdown />
        {/* Tabs */}

        {/* Ranking List */}
        <RankListItem/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rankingPage: {
    flex: 1,
    backgroundColor: '#fff',
  },
  rankingPage__container: {
    marginHorizontal: 16,
    marginVertical: 10,
  },
  rankingPage__headings: {
    fontSize: 21,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default RankingPage;
