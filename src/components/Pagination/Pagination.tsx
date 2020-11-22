import useActions from 'hooks/useActions';
import React from 'react';
import { useSelector } from 'react-redux';
import { changePageOffset } from 'redux/actions/pagination';
import { RootState } from 'redux/reducers/root';
import { NormalizationResult } from 'types/search';

import Dot from './Dot';
import Styles from './styles';

export default function Pagination() {
  const setPageOffset = useActions(changePageOffset);
  const { video, pageOffset, pageLimit } = useSelector<
    RootState,
    NormalizationResult
  >(state => state.search);

  const dots = Math.ceil(video.allIds.length / pageLimit);

  const pages = Array.from({ length: dots }).map((_d, i) => i);

  return (
    <Styles.Root>
      {pages.map(page => (
        <Dot
          key={`dot-${page}`}
          number={page + 1}
          active={page === pageOffset}
          onClick={() => setPageOffset(page)}
          data-testid="dot"
        />
      ))}
    </Styles.Root>
  );
}
