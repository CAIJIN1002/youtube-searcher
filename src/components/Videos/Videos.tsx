import VideoItem from 'components/VideoItem';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/reducers/root';
import { NormalizationResult } from 'types/search';

import Styles from './styles';

export default function Video() {
  const { pageOffset, pageLimit, video, error } = useSelector<
    RootState,
    NormalizationResult
  >(state => state.search);

  const startIndex = pageOffset * pageLimit;
  const endIndex = startIndex + pageLimit;
  return (
    <Styles.Root>
      <Styles.Container>
        {video.allIds
          .filter((_d, index) => index >= startIndex && index < endIndex)
          .map(videoId => (
            <VideoItem key={videoId} video={video.byVideoId[videoId]} />
          ))}
        {error && error.message}
      </Styles.Container>
    </Styles.Root>
  );
}
