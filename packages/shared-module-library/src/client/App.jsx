import React from 'react';

import {
  SharedModule1,
  SharedModule2,
  SharedModule3,
} from './components';

const App = () => {
  return (
    <div>
      hello here App 1
      <SharedModule1/>
      <SharedModule2/>
      <SharedModule3/>
    </div>
  )
};

export default App;
