import React from 'react';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.3,
    shadowColor: '#333',
    shadowRadius: 2,
    paddingHorizontal: 4,
    paddingVertical: 6,
  },

  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
});

const Card = (props) => {
  return (
    <View style={styles.card}>
      <View style={styles.content}>{props.children}</View>
    </View>
  );
};

export default Card;
