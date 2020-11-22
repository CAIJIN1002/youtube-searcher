import React from 'react';

import Styles from './styles';

interface PropsType {
  number: number;
  active?: boolean;
  onClick: () => void;
}
export default function Dot(props: PropsType) {
  const { number, active, onClick } = props;
  return (
    <Styles.Root active={active} onClick={onClick} data-testid="dot">
      {number}
    </Styles.Root>
  );
}
