import Pagination from 'components/Pagination';
import Videos from 'components/Videos';
import React from 'react';

import Styles from './styles';

export default function Youtube() {
  return (
    <Styles.Root>
      <Videos />
      <Pagination />
    </Styles.Root>
  );
}
