import useActions from 'hooks/useActions';
import React, {
  ChangeEvent,
  KeyboardEvent,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';
import { searchVideo } from 'redux/actions/search';

import Styles from './styles';

interface InputPropsType {
  endAdornment?: ReactElement;
}

export default function Input(props: InputPropsType) {
  const { endAdornment } = props;
  const serchVideo = useActions(searchVideo.request);

  const [query, setQuery] = useState('熱門音樂');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const initQuery = useRef(() => serchVideo({ query }));

  useEffect(() => {
    initQuery.current();
  }, []);

  const handleSubmit = () => {
    serchVideo({ query });
  };
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };
  return (
    <Styles.Root>
      <Styles.Input
        placeholder="熱門音樂"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <Styles.Adornment hidden={!endAdornment} onClick={handleSubmit}>
        {endAdornment}
      </Styles.Adornment>
    </Styles.Root>
  );
}
