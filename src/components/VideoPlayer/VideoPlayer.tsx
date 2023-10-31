import {StyleSheet, View} from 'react-native';
import Video from 'react-native-video';
import React from 'react';

interface IVideoPlayer {
  src: string;
}

const VideoPlayer = ({src}: IVideoPlayer) => {
  return (
    <View>
      <Video source={{uri: src}} style={styles.video} />
    </View>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  video: {
    width: '100%',
    aspectRatio: 1,
  },
});
