import React from 'react';
import './App.css';

import { Button } from '@project/components-typescript';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Button type="primary">TEST</Button>
      </header>
    </div>
  );
};

export default App;
