import { cleanup, fireEvent, render } from '@testing-library/react';
import Input from 'components/Input';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { searchVideo } from 'redux/actions/search';

jest.mock('hooks/useActions', () => (fn: Function) => fn);

jest.mock('redux/actions/search', () => ({
  searchVideo: {
    request: jest.fn(),
  },
}));

const createWrapper = props => {
  const store = configureStore()();

  const defaultProps = {
    ...props,
  };
  return render(
    <Provider store={store}>
      <Input {...defaultProps} />
    </Provider>
  );
};

describe('<Input />', () => {
  afterEach(() => {
    cleanup();
  });

  it('should called onChane successful', () => {
    const { getByRole } = createWrapper({});

    const textField = getByRole('textbox') as HTMLInputElement;

    fireEvent.change(textField, { target: { value: 'GEM' } });

    expect(textField.value).toBe('GEM');
  });

  it('should called searchVideo successful', () => {
    const { getByRole } = createWrapper({});

    const textField = getByRole('textbox');

    fireEvent.change(textField, { target: { value: 'GEM' } });

    fireEvent.keyDown(textField, { key: 'Enter' });

    expect(searchVideo.request).toBeCalled();
  });
});
