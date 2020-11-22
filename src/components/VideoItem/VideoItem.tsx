import React from 'react';

import Styles from './styles';

export default function VideoItem({ video }) {
  const thumbnail = video.snippet.thumbnails.medium.url;
  return (
    <Styles.Root>
      <Styles.Link
        href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Styles.Container>
          <Styles.VideoThumbnail src={thumbnail} />
          <Styles.Title data-testid="title">{video.snippet.title}</Styles.Title>
        </Styles.Container>
      </Styles.Link>
    </Styles.Root>
  );
}
