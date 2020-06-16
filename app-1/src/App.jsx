import React from "react";

const App = () => {
  const [counter, setCounter] = React.useState(0);
  return (
    <>
      <div>
        hello here react ({counter})
      </div>
      <div>
        <button onClick={() => setCounter(counter + 1)}>
          +1
        </button>
        <button onClick={() => setCounter(counter - 1)}>
          -1
        </button>
      </div>
    </>
  );
};

export default App;
