import React from "react";
import RickSanchez from './assets/rick-sanchez.png';

const App = () => {
  const [counter, setCounter] = React.useState(0);
  return (
    <>
      <img src={RickSanchez} alt=""/>
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
