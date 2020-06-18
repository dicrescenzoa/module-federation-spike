import React from 'react';
import Select from "@els/rt-fca-ui-components/dist/components/Select/Select";


import './style.scss';

const SharedModule = () => {
  const [counter, setCounter] = React.useState(0);
  return (
    <div className="shared-module-1">
      <h1>this is the SharedModule 1</h1>
      <div style={{maxWidth: '320px'}}>
        <Select
          label="Select an option"
          options={[{value:1, label:'test'}]}
          onChange={() => {}}
          type="variant-2"
        />
      </div>
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

export default SharedModule;
