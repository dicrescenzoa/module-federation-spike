import React from 'react';

import { SharedModule1 } from 'sharedModuleLibrary/SharedModules';

const App = () => {
  return (
    <div>
      hello!!! here App 1
      <SharedModule1 />
    </div>
  )
};

export default App;
