import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {color} from 'react-native-reanimated';
const styles = StyleSheet.create({
  button: {
    marginVertical: 14,
    borderRadius: 6,
    paddingVertical: 12,
    alignItems: 'center',
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

const Button = ({text, bgColor, ...props}) => {
  return (
    <View>
      <TouchableHighlight onPress={props.onPress}>
        <View style={[styles.button, {backgroundColor: `${bgColor}`}]}>
          <Text style={styles.buttonText}>{text}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default Button;
