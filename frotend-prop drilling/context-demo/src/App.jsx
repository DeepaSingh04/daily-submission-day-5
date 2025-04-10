import React from 'react';
import Parent from './components/Parent';
import MyContext from './context/MyContext';

function App() {
  const message = "Hello from Deepa ,I m creatte a context!"; // Data we want to pass

  return (
    
    <MyContext.Provider value={message}>
      <h1>App Component</h1>
      <Parent />
    </MyContext.Provider>
  );
}

export default App;
