import React, { useEffect } from 'react';
import { initialize } from './contractKit';

import Marketplace from './components/Marketplace';
import CreateCredit from './components/CreateCredit';

function App() {
  useEffect(() => {
    initialize();
  }, []);

  return (
    <div>
      <Marketplace />
      <CreateCredit />
    </div>
  );
}

export default App;