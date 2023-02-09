import Plan from "./Plan"

export default function Plans() {

    const planData = [
        { img: "A", type: "Arcade", price: 9, bg: "bg-orange-400", mr: "mr-4" },
        { img: "B", type: "Advanced", price: 12, bg: "bg-red-400", mr: "mr-4" },
        { img: "C", type: "Pro", price: 15, bg: "bg-blue-800", mr: "" }
    ]

    return (
        <div className="my-8 mx-12 text-blue-900 flex flex-col">
            <div className="mb-2 text-3xl font-extrabold">
                Select your plan
            </div>
            <div className="mb-8 text-gray-400">
                You have the option of monthly or yearly billing.
            </div>
            <div className="flex flex-row">
                {planData.map((val) => (
                    <Plan img={val.img} type={val.type} price={val.price} bg={val.bg} mr={val.mr} />
                ))}
            </div>
        </div>
    )
}