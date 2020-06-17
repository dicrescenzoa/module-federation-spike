import React from 'react';

const SharedModule3 = () => {
  const [counter, setCounter] = React.useState(0);
  return (
    <div>
      <h1>this is the SharedModule 3</h1>
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

export default SharedModule3;
