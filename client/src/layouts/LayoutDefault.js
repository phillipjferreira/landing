import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';

const LayoutDefault = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <main>{children}</main>
    </Fragment>
  );
};

export default LayoutDefault;
