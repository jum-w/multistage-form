interface SelectionProps {
    step: number;
    title: string;
    currentStep: number;
}

export default function Selection({ step, title, currentStep }: SelectionProps) {
    return (
        <div className="flex ml-8 my-6 items-center text-white font-bold">
            <div className={`border-2 rounded-full px-3 items-center flex h-9 ${currentStep + 1 === step ? "bg-blue-200 border-blue-200 text-blue-900" : ""}`}>{step}</div>
            <div className="mx-4">
                <label className="font-light text-gray-300">STEP {step}</label>
                <h4>{title}</h4>
            </div>
        </div>
    )
}