import React from 'react';

import './style.scss';

const SharedModule2 = () => {
  const [counter, setCounter] = React.useState(0);
  return (
    <div className="shared-module-2">
      <h1>this is the SharedModule 1</h1>
      <div>
        <p>{counter}</p>
        <button onClick={() => {
          setCounter(counter + 1)
        }}>+
        </button>
      </div>
    </div>
  )
};

export default SharedModule2;
