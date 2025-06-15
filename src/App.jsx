import React from 'react';
import Routing from './Routing';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Routing />
      <ScrollToTop />
    </div>
  );
};

export default App;
