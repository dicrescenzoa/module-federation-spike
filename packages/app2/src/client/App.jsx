import React from 'react';

import SharedModule from 'app1/SharedModule';

import { SharedModule1 } from 'sharedModuleLibrary/Modules';

const App = () => {
  return (
    <div>
      hello here App 2
      <SharedModule />
      <SharedModule1 />
    </div>
  )
};

export default App;
