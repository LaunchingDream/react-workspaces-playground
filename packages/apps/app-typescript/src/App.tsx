import React from 'react';
import './App.css';

import { Button, Card } from '@project/components-typescript';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        TEST TEST
        <Button type="primary">TEST</Button>
        <Card>TEST</Card>
      </header>
    </div>
  );
};

export default App;
