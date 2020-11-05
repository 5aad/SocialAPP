import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const RankListItem = () => {
  return (
    <View style={styles.rankListItem}>
      <View style={styles.left__rankListItem}>
        <Text style={styles.num__left__rankListItem}>1</Text>
        <Image
          style={styles.imgSize__left__rankListItem}
          source={{
            uri:
              'https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract01.jpg',
          }}
        />
      </View>

      <View style={styles.right__rankListItem}>
        <Text style={styles.title__right__rankListItem}>
          If you have to change Android native code, you must have a look at the
          code in the example activity on your connected device and run the
          Metro bundler
        </Text>

        <View style={styles.nameDate__right__rankListItem}>
          <Text style={styles.name__right__rankListItem}>User Name</Text>
          <Text style={styles.date__right__rankListItem}>.20 days ago</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rankListItem: {
    display: 'flex',
    marginHorizontal: 16,
    marginVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  right__rankListItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: 230,
  },
  left__rankListItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: 120,
  },
  nameDate__right__rankListItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:5
  },
  imgSize__left__rankListItem: {
    width: 80,
    height: 90,
  },
  num__left__rankListItem: {
    paddingVertical:4,
    paddingHorizontal:10,
    backgroundColor: '#000',
    borderRadius: 60,
    color:'#fff',
    fontWeight:"bold",
    fontSize:16
  },
  title__right__rankListItem:{
      fontSize:15,
      fontWeight:'500',
      justifyContent:"space-evenly"
  },
  name__right__rankListItem:{
      fontSize:16,
      fontWeight:"bold",
  },
  date__right__rankListItem:{
    fontSize:14,
    fontWeight:"bold",
    color:'#d1d1d1'
}
});


export default RankListItem;
