import Addon from "./Addon"

interface addonsProps {
    yearly: boolean | null;
}

export default function Addons({ yearly }: addonsProps) {
    const addonData = [
        { title: "Online service", desc: "Access to multiplayer games", price: 1 },
        { title: "Larger storage", desc: "Extra 1TB of cloud save", price: 2 },
        { title: "Customizable profile", desc: "Custom theme on your profile", price: 2 }
    ]
    return (
        <div className="my-8 mx-12 text-blue-900 flex flex-col">
            <div className="mb-2 text-3xl font-extrabold">
                Pick add-ons
            </div>
            <div className="mb-8 text-gray-400">
                Add-ons help enhance your gaming experience.
            </div>
            <div className="flex flex-col">
                {addonData.map((val, index) => (
                    <div className="rounded-md border border-gray-300 mb-4" key={index}>
                        <Addon title={val.title} desc={val.desc} price={yearly ? (`$${val.price}/mo`) : (`$${val.price * 10}/yr`)} />
                    </div>
                ))}
            </div>
        </div>
    )
}