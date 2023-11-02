import {Pressable} from 'react-native';
import React from 'react';
import {ReactNode} from 'react';

interface IDoublePressable {
  onDoublePress?: () => void;
  children: ReactNode;
}

const index = ({children, onDoublePress = () => {}}: IDoublePressable) => {
  let lastTap = 0;

  const handleDoublePress = () => {
    let now = Date.now();
    if (now - lastTap < 300) {
      onDoublePress();
    }
    lastTap = now;
  };
  return <Pressable onPress={handleDoublePress}>{children}</Pressable>;
};

export default index;
