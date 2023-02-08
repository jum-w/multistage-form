import React from 'react';
import Info from './components/Info';
import Selection from './components/Selection'

function App() {
  const Selections = {
    steps: [1, 2, 3, 4],
    title: ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"]
  }

  return (
    <div className="bg-blue-100 min-h-screen justify-center flex items-center font-ubuntu text-sm">
      <div className="bg-white w-defw h-defh flex rounded-xl">
        <div className="bg-blue-700 w-1/3 m-3 rounded-xl">
          <Selection step={Selections.steps[0]} title={Selections.title[0]} />
          <Selection step={Selections.steps[1]} title={Selections.title[1]} />
          <Selection step={Selections.steps[2]} title={Selections.title[2]} />
          <Selection step={Selections.steps[3]} title={Selections.title[3]} />
        </div>
        <div className="w-2/3 m-3">
          <Info />
        </div>
      </div>
    </div>
  );
}

export default App;
