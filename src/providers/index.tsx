import { StrictMode } from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router';
import ReactQueryProvider from './react-query.provider';

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <StrictMode>
      <BrowserRouter>
        <ReactQueryProvider>
          <Toaster />
          {children}
        </ReactQueryProvider>
      </BrowserRouter>
    </StrictMode>
  );
};

export default Providers;
