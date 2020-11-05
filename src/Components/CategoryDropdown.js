import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown-v2';

const CategoryDropdown = () => {
  let data = [
    {
      value: 'Popular',
    },
    {
      value: 'Art & Entertainment',
    },
    {
      value: 'Autos/Vehicles',
    },
    {
      value: 'Business',
    },
    {
      value: 'Community/Society',
    },
    {
      value: 'Education',
    },
  ];
  return (
    <View>
      <Dropdown label="Categories" data={data}  />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CategoryDropdown;
