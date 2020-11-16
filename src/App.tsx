import React from 'react';
import { AuthContextProvider } from '_contexts';
import { Startup } from '_scenes';

const App = () => {
  return (
    <AuthContextProvider>
      <Startup />
    </AuthContextProvider>
  );
};

export default App;
