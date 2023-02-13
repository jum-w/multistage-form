import { useState } from "react";

interface planProps {
    img: string;
    type: string;
    price: number | string;
    bg: string;
    optText: string;
}

export default function Plan({ img, type, price, bg, optText }: planProps) {
    return (
        <div className="flex flex-col h-full justify-between">
            <div className={`border-orange-400 rounded-full px-3 items-center flex w-min h-8 ${bg} text-white`}>
                {img}
            </div>
            <div className="">
                <h4 className="font-bold">
                    {type}
                </h4>
                <h6 className="text-gray-400">
                    {price}
                </h6>
                <h6 className="">
                    {optText}
                </h6>
            </div>
        </div>
    )
}