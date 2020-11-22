import { cleanup, fireEvent, render } from '@testing-library/react';
import Dot from 'components/Pagination/Dot';
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
      <Dot {...defaultProps} />
    </Provider>
  );
};

describe('<Dot />', () => {
  afterEach(() => {
    cleanup();
  });

  it('should called click successful', () => {
    const onClick = jest.fn();
    const { getByTestId } = createWrapper({
      onClick,
    });

    const dot = getByTestId('dot');

    fireEvent.click(dot);

    expect(onClick).toBeCalled();
  });
});
