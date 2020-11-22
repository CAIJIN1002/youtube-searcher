import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from 'components/Input';
import React from 'react';

import Styles from './styles';

export default function Topbar() {
  return (
    <Styles.Root>
      <Input endAdornment={<FontAwesomeIcon icon={faSearch} />} />
    </Styles.Root>
  );
}
