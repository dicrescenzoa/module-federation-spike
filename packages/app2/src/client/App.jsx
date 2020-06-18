import React from 'react';

import { SharedModule1, SharedModule2, SharedModule3 } from 'sharedModuleLibrary/SharedModules';

const App = () => {
  return (
    <div>
      hello here App 2
      <SharedModule1 />
      <SharedModule2 />
      <SharedModule3 />
    </div>
  )
};

export default App;
