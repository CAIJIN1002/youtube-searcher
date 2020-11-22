export enum ActionTypes {
  SEARCH_VIDEO = 'SEARCH_VIDEO',
  SEARCH_SUCCESS = 'SEARCH_SUCCESS',
  SEARCH_FAIL = 'SEARCH_FAIL',
}

export interface ItemType {
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snapshot: {
    channelId: string;
    channelTitle: string;
    description: string;
    liveBroadcastContent: string;
    publishTime: Date;
    publishedAt: Date;
    title: string;
  };
  thumbnails: {
    default: Thumbnail;
    high: Thumbnail;
    medium: Thumbnail;
  };
}
export interface BaseResult {
  etag: string;
  kind: string;
  nextPageToken: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  regionCode: string;
}
export interface SearchSuccess extends BaseResult {
  items: ItemType[];
}

export interface Thumbnail {
  height: number;
  url: string;
  width: number;
}

export interface NormalizationResult extends BaseResult {
  pageOffset: number;
  pageLimit: number;
  loading: boolean;
  error?: Error;
  video: {
    allIds: string[];
    byVideoId: {
      [key: string]: {
        etag: string;
        id: {
          kind: string;
          videoId: string;
        };
        kind: string;
        snippet: {
          channelId: string;
          channelTitle: string;
          description: string;
          liveBroadcastContent: string;
          publishTime: string;
          publishedAt: string;
          title: string;
          thumbnails: {
            default: Thumbnail;
            high: Thumbnail;
            medium: Thumbnail;
          };
        };
      }[];
    };
  };
}

export interface SearchVideoByError {
  error: Error;
}

export interface SearchVideoPayload {
  query: string;
}
