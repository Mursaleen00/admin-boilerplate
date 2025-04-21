import { StrictMode } from 'react';
import BrowserRouterProvider from './browser-router.provider';

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <StrictMode>
      <BrowserRouterProvider>{children}</BrowserRouterProvider>
    </StrictMode>
  );
};

export default Providers;
