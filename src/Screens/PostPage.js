import React from 'react';
import {SafeAreaView, Text, View, StyleSheet, ScrollView} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Button from "../Components/Button"
import CategoryDropdown from '../Components/CategoryDropdown';
import TopAppBar from '../Components/TopAppBar';

const PostPage = () => {
  return (
    <ScrollView style={styles.postPage}>
      <SafeAreaView>
        <TopAppBar />
        <View style={styles.postPage__container}>
          <Text style={styles.postPage__headings}>Title:</Text>
          <TextInput style={styles.postPage__inputText} />

          <Text style={styles.postPage__headings}>Category:</Text>
          <CategoryDropdown />

          <Text style={styles.postPage__headings}>Options:</Text>
          <View style={styles.postPage__optionContainer}>
            <Text style={styles.postPage__optionNum}>#1</Text>
            <TextInput style={styles.postPage__inputText} />
          </View>
          <Button text="Add more option" bgColor="#222324" />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  postPage: {
    flex: 1,
    backgroundColor: '#fff',
  },
  postPage__container: {
    marginHorizontal: 16,
    marginVertical: 18,
  },
  postPage__headings:{
      fontSize:21,
      fontWeight:'600',
      marginVertical:15
  },
  postPage__inputText:{
    borderColor: '#C4C4C4',
    borderWidth: 1,
    borderRadius: 9,
    paddingHorizontal: 14,
    flexGrow:1
  },
  postPage__optionContainer:{
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      
  },
  postPage__optionNum:{
    fontSize:18,
    fontWeight:'600',
    marginRight:10
  }
});

export default PostPage;
