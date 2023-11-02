import {FlatList} from 'react-native';
import React from 'react';
import {IPost} from '../../types/models';
import FeedGidItem from './FeedGidItem';

interface IFeedGridView {
  data: IPost[];
  ListHeaderComponent?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;
}

const FeedGridView = ({data, ListHeaderComponent}: IFeedGridView) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <FeedGidItem post={item} />}
      numColumns={3}
      flexWrap="wrap"
      ListHeaderComponent={ListHeaderComponent}
    />
  );
};

export default FeedGridView;
