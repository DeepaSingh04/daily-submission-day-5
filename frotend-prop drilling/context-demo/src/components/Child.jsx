import React from 'react';
import NestedComponent from './NestedComponent';

function Child() {
  return (
    <div>
      <h3>Child Component</h3>
      <NestedComponent />
    </div>
  );
}

export default Child;
