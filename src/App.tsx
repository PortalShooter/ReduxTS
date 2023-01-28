import React from 'react';
import { useAppSelector } from './hooks/useAppSelector';

function App() {
  const user = useAppSelector(state => state)

  console.log('user :>> ', user);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
