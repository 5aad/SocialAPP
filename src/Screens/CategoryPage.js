import React from 'react';
import {SafeAreaView, View, ScrollView, StyleSheet} from 'react-native';
import {Title} from 'react-native-paper';
import CategoryListItem from '../Components/CategoryListItem';
import TopAppBar from '../Components/TopAppBar';

const CategoryPage = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <TopAppBar />
      <Title style={{marginHorizontal: 16, marginVertical: 5}}>
        Category:{' '}
      </Title>
      <CategoryListItem />
    </SafeAreaView>
  );
};

export default CategoryPage;
