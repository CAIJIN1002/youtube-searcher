import { cleanup, render } from '@testing-library/react';
import VideoItem from 'components/VideoItem';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const createWrapper = (props?: any) => {
  const mockStore = configureStore();
  const store = mockStore();
  const defaultProps = {
    ...props,
  };
  return render(
    <Provider store={store}>
      <VideoItem {...defaultProps} />
    </Provider>
  );
};

describe('<VideoItem />', () => {
  afterEach(() => {
    cleanup();
  });

  it('should shows link correctly', () => {
    const { getByText } = createWrapper({
      video: {
        id: {
          videoId: 'videoId',
        },
        snippet: {
          title: 'google',
          thumbnails: {
            medium: {
              url: 'https://www.google.com/',
            },
          },
        },
      },
    });
    const title = getByText('google');

    expect(title).toBeTruthy();
  });
});
