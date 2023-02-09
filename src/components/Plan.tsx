interface planProps {
    img: string;
    type: string;
    price: number;
    bg: string;
    mr: string;
}

export default function Plan({ img, type, price, bg, mr }: planProps) {
    return (
        <div className={`text-blue-900 flex flex-col justify-between p-3 border rounded-lg w-1/3 h-36 ${mr} hover:bg-blue-200 active:bg-blue-500`}>
            <div className={`border-orange-400 rounded-full px-3 items-center flex w-min h-8 ${bg} text-white`}>
                {img}
            </div>
            <div className="">
                <h4 className="font-bold">
                    {type}
                </h4>
                <h6 className="text-gray-400">
                    ${price}/mo
                </h6>
            </div>
        </div>
    )
}