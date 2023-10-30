import React, {useState, useRef} from 'react';
import {
  View,
  FlatList,
  Image,
  useWindowDimensions,
  ViewabilityConfig,
  ViewToken,
} from 'react-native';

import DoublePressable from '../DoublePressable';
import colors from '../../theme/colors';

interface ICarousel {
  images: string[];
  handlDoublePress: () => void;
}

const Carousel = ({images, handlDoublePress}: ICarousel) => {
  const {width} = useWindowDimensions();
  const [activeImageIndex, setactiveImageIndex] = useState(0);

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };
  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      if (viewableItems.length > 0) {
        setactiveImageIndex(viewableItems[0].index || 0);
      }
    },
  );

  return (
    <View>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <DoublePressable onDoublePress={handlDoublePress}>
            <Image style={{width, aspectRatio: 1}} source={{uri: item}} />
          </DoublePressable>
        )}
        horizontal
        pagingEnabled
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          bottom: 0,
          position: 'absolute',
          width: '100%',
          margin: 10,
        }}>
        {images.map((_, index) => (
          <View
            key={index}
            style={{
              width: 10,
              aspectRatio: 1,
              backgroundColor:
                activeImageIndex == index ? colors.accent : colors.white,
              borderRadius: 5,
              marginHorizontal: 5,
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;
