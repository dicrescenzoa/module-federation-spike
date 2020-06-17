import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 4px solid green;
  padding: 12px
`;

const SharedModule = () => {
  const [counter, setCounter] = React.useState(0);
  return (
    <Wrapper>
      <h1>this is the SharedModule 1</h1>
      <div>
        <p>{counter}</p>
        <button onClick={() => {
          setCounter(counter + 1)
        }}>+
        </button>
      </div>
    </Wrapper>
  )
};

export default SharedModule;
