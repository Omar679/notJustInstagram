import {Pressable, StyleSheet, Text, View} from 'react-native';
import Video from 'react-native-video';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../theme/colors';

interface IVideoPlayer {
  src: string;
  paused: boolean;
}

const VideoPlayer = ({src, paused}: IVideoPlayer) => {
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);

  const onProgress = data => {
    setCurrentTime(data.currentTime);
  };
  const convertTime = seconds => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const formattedHours = hours > 0 ? `${hours}:` : '';
    const formattedMinutes = minutes > 0 ? `${minutes}:` : '';
    const formattedSeconds =
      remainingSeconds > 0 ? `0:${remainingSeconds}` : '';

    return `${formattedHours}${formattedMinutes}${formattedSeconds}`;
  };

  return (
    <View>
      <Video
        source={{uri: src}}
        style={styles.video}
        resizeMode="cover"
        repeat
        muted={isMuted}
        paused={paused}
        onProgress={onProgress}
      />
      <Pressable style={styles.muteButton} onPress={() => setIsMuted(v => !v)}>
        <Ionicons
          name={isMuted ? 'volume-mute' : 'volume-medium'}
          size={14}
          color={colors.white}
        />
      </Pressable>
      <View style={styles.duration}>
        <Text style={{color: '#fff'}}>{convertTime(currentTime)}</Text>
      </View>
    </View>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  video: {
    width: '100%',
    aspectRatio: 1,
  },
  muteButton: {
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    padding: 5,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  duration: {
    backgroundColor: colors.grey,
    padding: 5,
    position: 'absolute',
    borderRadius: 50,
    top: 10,
    right: 10,
  },
});
