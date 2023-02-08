interface SelectionProps {
    step: number;
    title: string;
}

export default function Selection({ step, title }: SelectionProps) {
    return (
        <div className="flex ml-8 mr-4 my-6 items-center text-white font-bold">
            <div className="border-2 rounded-full px-3 items-center flex h-9">{step}</div>
            <div className="mx-4">
                <label className="font-light text-gray-300">STEP {step}</label>
                <h4>{title}</h4>
            </div>
        </div>
    )
}