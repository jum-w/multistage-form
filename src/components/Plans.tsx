import Plan from "./Plan"
import { useState } from 'react';

interface plan {
    plan: (newPlan: number) => void;
}

export default function Plans({ plan }: plan) {
    const [highlightedPlan, setHighlightedPlan] = useState<number | null>(null)
    const [isMonthly, setIsMonthly] = useState(true);

    const optText: string = "2 months free";

    const planData = [
        { img: "A", type: "Arcade", price: 9, bg: "bg-orange-400", mr: "mr-4" },
        { img: "B", type: "Advanced", price: 12, bg: "bg-red-400", mr: "mr-4" },
        { img: "C", type: "Pro", price: 15, bg: "bg-blue-800", mr: "" }
    ]

    const handleClick = (index: number) => {
        plan(index);
        setHighlightedPlan(index);
    }

    return (
        <div className="my-8 mx-12 text-blue-900 flex flex-col">
            <div className="mb-2 text-3xl font-extrabold">
                Select your plan
            </div>
            <div className="mb-8 text-gray-400">
                You have the option of monthly or yearly billing.
            </div>
            <div className="flex flex-row">
                {planData.map((val, index) => (
                    <div key={index} className={`text-blue-900 p-3 border rounded-lg w-1/3 ${isMonthly ? "h-36" : "h-40"} ${val.mr} hover:border-purple-900 ${highlightedPlan === index ? "bg-blue-50 border-purple-900" : ""}`} onClick={() => { handleClick(index) }}>
                        <Plan img={val.img} type={val.type} price={isMonthly ? val.price : val.price * 10} bg={val.bg} optText={isMonthly ? "" : optText} />
                    </div>
                ))}
            </div>
            <div className="bg-blue-50 p-3 rounded-md mt-5 flex justify-center">
                <h4>Monthly</h4>
                <button className={`bg-blue-900 mx-4 rounded-full text-white px-5 ${isMonthly ? "" : "rotate-180"} hover:bg-blue-700 transition-all flex`} onClick={() => { setIsMonthly(!isMonthly) }}>
                    <p className="-translate-x-4">🡸</p>
                </button>
                <h4>Yearly</h4>
            </div>
        </div>
    )
}