interface addonProps {
    title: string;
    desc: string;
    price: number | string;
}

export default function Addon({ title, desc, price }: addonProps) {
    return (
        <div className="flex h-full justify-between p-4">
            <div className="flex">
                <input type="checkbox" className="w-5 accent-purple-900 ring-gray-200" onChange={alert} />
                <div className="mx-5">
                    <h4 className="font-bold">{title}</h4>
                    <h6 className="text-gray-400">{desc}</h6>
                </div>
            </div>
            <div className="flex items-center text-purple-800">
                {price}
            </div>
        </div >
    )
}