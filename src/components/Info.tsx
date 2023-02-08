export default function Info() {
    return (
        <div className="my-8 mx-12 text-blue-900 flex flex-col h-full">
            <div className="mb-2 text-3xl font-extrabold">
                Personal info
            </div>
            <div className="mb-8 text-gray-400">
                Please provide your name, email address, and phone number.
            </div>
            <form className="">
                <div className="flex flex-col">
                    <label>Name</label>
                    <input type="text" placeholder="e.g Stephen King" className="mt-1 mb-6 border focus:outline-none focus:border-purple-900 p-3 rounded-lg" />
                </div>
                <div className="flex flex-col">
                    <label>Email Address</label>
                    <input type="text" placeholder="e.g stephenking@lorem.com" className="mt-1 mb-6 border focus:outline-none focus:border-purple-900 p-3 rounded-lg" />
                </div>
                <div className="flex flex-col">
                    <label>Phone Number</label>
                    <input type="text" placeholder="e.g +1 234 567 890" className="mt-1 border focus:outline-none focus:border-purple-900 p-3 rounded-lg" />
                </div>
            </form>
            <div className="flex justify-end items-end h-40">
                <button className="py-2 px-4 rounded-lg bg-blue-900 text-white">Next Step</button>
            </div>
        </div>
    )
}