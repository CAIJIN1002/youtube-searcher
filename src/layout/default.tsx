import Topbar from 'components/Topbar';
import React, { Fragment, ReactElement } from 'react';

interface PropsType {
  children: ReactElement;
}
export default function Layout(props: PropsType) {
  const { children } = props;

  return (
    <Fragment>
      <Topbar />
      {children}
    </Fragment>
  );
}
