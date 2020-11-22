export interface ConfigType {
  youtube: {
    API_KEY: string;
    urls: {
      getSearchUrl: (query: string) => string;
    };
  };
}
