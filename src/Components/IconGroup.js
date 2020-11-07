import React from 'react';
import {Text, View} from 'react-native';
import {IconButton} from 'react-native-paper';
const IconGroup = ({check, ...props}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 5,
      }}>
      <View style={{alignItems: 'center'}}>
        <IconButton
          icon="thumb-up"
          color="#2a7ff6"
          size={24}
          onPress={() => console.log('Pressed')}
          style={{margin: 0}}
        />
        {check === 'true' ? <Text>like</Text> : <Text>10</Text>}
      </View>

      <View style={{alignItems: 'center'}}>
        <IconButton
          icon="thumb-down"
          color="#2a7ff6"
          size={24}
          onPress={() => console.log('Pressed')}
          style={{margin: 0}}
        />
        {check === 'true' ? <Text>dislike</Text> : <Text>10</Text>}
      </View>

      {check === 'true' ? (
        <>
          <View style={{alignItems: 'center'}}>
            <IconButton
              icon="share"
              color="#2a7ff6"
              size={24}
              onPress={() => console.log('Pressed')}
              style={{margin: 0}}
            />
            <Text>share</Text>
          </View>

          <View style={{alignItems: 'center'}}>
            <IconButton
              icon="bookmark-plus"
              color="#2a7ff6"
              size={24}
              onPress={() => console.log('Pressed')}
              style={{margin: 0}}
            />
            <Text>save</Text>
          </View>
        </>
      ) : (
        <>
          <View style={{alignItems: 'center'}}>
            <IconButton
              icon="comment-text"
              color="#2a7ff6"
              size={24}
              onPress={() => console.log('Pressed')}
              style={{margin: 0}}
            />
            <Text>20</Text>
          </View>
        </>
      )}
    </View>
  );
};

export default IconGroup;
