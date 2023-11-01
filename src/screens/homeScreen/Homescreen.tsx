import React, {useRef, useState} from 'react';
import FeedPost from '../../components/FeedPost';
import {
  View,
  StyleSheet,
  FlatList,
  ViewabilityConfig,
  ViewToken,
} from 'react-native';
import posts from '../../../src/assets/data/posts.json';

const HomeScreen = () => {
  const [activePostId, setActivePostId] = useState<string | null>(null);

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      if (viewableItems.length > 0) {
        setActivePostId(viewableItems[0].item.id);
      }
    },
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({item}) => (
          <FeedPost
            post={item}
            isVisible={activePostId === item.id}
            showsVerticalScrollIndicator={false}
          />
        )}
        keyExtractor={item => item.id}
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={onViewableItemsChanged.current}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default HomeScreen;
