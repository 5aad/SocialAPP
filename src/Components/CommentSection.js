import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {IconButton, Divider, Menu} from 'react-native-paper';
const CommentSection = () => {
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  return (
    <View style={styles.listContent}>
      <TextInput style={styles.txtInput} placeholder="Comments" />

      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <IconButton
            icon="filter-variant"
            color="#000"
            size={16}
            onPress={openMenu}
          />
        }>
        <Menu.Item onPress={() => {}} title="Top Comments" />
        <Divider />
        <Menu.Item onPress={() => {}} title="Newst First" />
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  txtInput: {
    fontSize: 16,
    flex: 1,
  },

  listContent: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 5,
  },
});

export default CommentSection;
