import Info from './components/Info';
import Plans from './components/Plans';
import Addons from './components/Addons';
import Summary from './components/Summary';
import Selection from './components/Selection'
import { useState } from 'react';

function App() {
  const [currentStep, setCurrentStep] = useState(0);

  const selectionData = [
    { step: 1, title: "YOUR INFO" },
    { step: 2, title: "SELECT PLAN" },
    { step: 3, title: "ADD-ONS" },
    { step: 4, title: "SUMMARY" },
  ]

  const sections = [
    () => <Info />,
    () => <Plans />,
    () => <Addons />,
    () => <Summary />
  ]

  return (
    <div className="bg-blue-100 min-h-screen justify-center flex items-center font-ubuntu text-sm">
      <div className="bg-white w-defw h-defh flex rounded-xl">
        <div className="bg-blue-700 w-1/3 m-3 rounded-xl">
          {selectionData.map((selection) => (
            <Selection key={selection.step} step={selection.step} title={selection.title} currentStep={currentStep} />
          ))}
        </div>
        <div className="w-2/3 m-3 relative">
          {sections[currentStep]()}
          <div className="absolute bottom-10 right-0 mx-12">
            {currentStep !== 3 && <button className="py-2 px-4 rounded-lg bg-blue-900 text-white" onClick={() => setCurrentStep(currentStep + 1)}>Next Step</button>}
          </div>
          <div className="absolute bottom-10 left-0 mx-12">
            {currentStep !== 0 && <button className="py-2 text-gray-400" onClick={() => setCurrentStep(currentStep - 1)}>Go back</button>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
