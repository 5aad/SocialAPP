import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback, ToastAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
const TopAppBar = () => {
  const showToast = () => {
    ToastAndroid.show("A pikachu appeared nearby !", ToastAndroid.SHORT);
  };
  return (
    <View style={styles.topHeader}>
      {/* Left Icon */}
      <View>
        <TouchableWithoutFeedback>
          <Icon name="instagram" color="#000" size={24} />
        </TouchableWithoutFeedback>
      </View>

      {/* Right Three Icons */}
      <View style={styles.right__topHeader}>
        <TouchableWithoutFeedback onPress={() => showToast()}>
          <Icon name="edit" color="#000" size={24} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => showToast()}>
          <Icon name="search" color="#000" size={24} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => showToast()}>
          <Icon name="user" color="#000" size={24} />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topHeader: {
    display: 'flex',
    marginHorizontal: 16,
    marginVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  right__topHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 110,
  },
});

export default TopAppBar;
