import React from 'react';
import { BrowserRouter } from 'react-router';

const BrowserRouterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default BrowserRouterProvider;
