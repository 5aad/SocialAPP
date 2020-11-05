import React from 'react';
import {SafeAreaView, Text, View, StyleSheet, ScrollView, ToastAndroid} from 'react-native';
import CategoryDropdown from '../Components/CategoryDropdown';
import TopAppBar from '../Components/TopAppBar';
import {useTheme, TextInput, Button} from 'react-native-paper';
const PostPage = () => {
  const {colors} = useTheme();
  const showToast = () => {
    ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
  };
  return (
    <ScrollView style={styles.postPage}>
      <SafeAreaView>
        <TopAppBar />
        <View style={styles.postPage__container}>
          <Text style={styles.postPage__headings}>Title:</Text>
          <TextInput
            style={styles.postPage__inputText}
            label="Outlined input"
            mode="outlined"
            maxLength={150}
          />

          <Text style={styles.postPage__headings}>Category:</Text>
          <CategoryDropdown />

          <Text style={styles.postPage__headings}>Options:</Text>
          <View style={styles.postPage__optionContainer}>
            <Text style={styles.postPage__optionNum}>#1</Text>
            <TextInput
              style={styles.postPage__inputText}
              label="Outlined input"
              mode="outlined"
              maxLength={150}
            />
          </View>
          <Button
            color={colors.accent}
            mode="contained"
            onPress={() => showToast()}>
            Press me
          </Button>
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
  postPage__headings: {
    fontSize: 21,
    fontWeight: '600',
    marginVertical: 15,
  },
  postPage__inputText: {
    borderColor: '#C4C4C4',
    flexGrow: 1,
  },
  postPage__optionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  postPage__optionNum: {
    fontSize: 18,
    fontWeight: '600',
    marginRight: 10,
  },
});

export default PostPage;
