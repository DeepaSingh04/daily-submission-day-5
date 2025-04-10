import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function NestedComponent() {
  // Step 3: Use the context
  const contextData = useContext(MyContext);

  return (
    <div>
      <h4>Nested Component</h4>
      <p>Received from context: {contextData}</p>
    </div>
  );
}

export default NestedComponent;
