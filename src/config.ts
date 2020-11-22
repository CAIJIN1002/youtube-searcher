import { ConfigType } from 'types/config';

const config: ConfigType = {
  youtube: {
    API_KEY: 'AIzaSyA1y4zTm-QJsKwQ2oxCD3_-3hpXEptWgHY',
    urls: {
      getSearchUrl(this: ConfigType, query: string) {
        return `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&type=video&key=${this.youtube.API_KEY}&q=${query}`;
      },
    },
  },
};

export default config;
