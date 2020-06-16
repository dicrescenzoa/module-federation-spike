import React from "react";

import Logo from './assets/logo.png';

import Characters from './Characters';

const App = () => {
  const [counter, setCounter] = React.useState(0);

  return (
    <>
      <img src={Logo} alt="" width={500}/>
      <Characters />
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
