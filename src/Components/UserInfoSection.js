import React from 'react';
import {Text, View} from 'react-native';
import {List, IconButton, Avatar} from 'react-native-paper';
const UserInfoSection = ({...props}) => {
  return (
    <View>
      <List.Item
        title="Jennifer"
        description="100k follower"
        left={(props) => <Avatar.Text size={54} label="XD" />}
        right={(props) => (
          <View style={{alignItems: 'center'}}>
            <IconButton
              icon="account-plus"
              color="#2a7ff6"
              size={34}
              onPress={() => console.log('Pressed')}
              style={{margin: 0}}
            />
            <Text>follow</Text>
          </View>
        )}
      />
    </View>
  );
};

export default UserInfoSection;
