import {View, Image} from 'react-native';
import React from 'react';
import {IPost} from '../../types/models';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import colors from '../../theme/colors';

const FeedGidItem = ({post}: {post: IPost}) => {
  return (
    <View style={{flex: 1, padding: 1, maxWidth: '33.33%', height: 100}}>
      <Image source={{uri: post.image || post.images[0]}} style={{flex: 1}} />
      {post.images && (
        <MaterialIcons
          name="collections"
          size={16}
          style={{position: 'absolute', top: 5, right: 5}}
          color={colors.white}
        />
      )}
    </View>
  );
};

export default FeedGidItem;
