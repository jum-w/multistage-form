import React from 'react';
import Info from './components/Info';
import Selection from './components/Selection'

function App() {
  const selectionData = [
    { step: 1, title: "YOUR INFO" },
    { step: 2, title: "SELECT PLAN" },
    { step: 3, title: "ADD-ONS" },
    { step: 4, title: "SUMMARY" },
  ]

  return (
    <div className="bg-blue-100 min-h-screen justify-center flex items-center font-ubuntu text-sm">
      <div className="bg-white w-defw h-defh flex rounded-xl">
        <div className="bg-blue-700 w-1/3 m-3 rounded-xl">
          {selectionData.map((selection) => (
            <Selection key={selection.step} step={selection.step} title={selection.title} />
          ))}
        </div>
        <div className="w-2/3 m-3">
          <Info />
        </div>
      </div>
    </div>
  );
}

export default App;
