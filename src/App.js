import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutesConfigs from './RoutesConfigs';

function App() {
  return (
    <BrowserRouter>
      <RoutesConfigs />
    </BrowserRouter>
  );
}

export default App;
