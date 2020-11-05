import React from 'react';
import {SafeAreaView, View, ScrollView, StyleSheet} from 'react-native';
import Card from '../Components/Card';

const CategoryPage = () => {
  return (
    <ScrollView>
      <SafeAreaView>
        <View>
          <Card></Card>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default CategoryPage;
