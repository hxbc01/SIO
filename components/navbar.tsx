const Navbar = () => {
    return (
        <div className="container mt-8">
            <div className="flex justify-between items-center">
                <div className="flex justify-between mx-8">
                    <h2 className="font-bold text-3xl">
                       
                        Sio
                    </h2>
                    <p className="text-amber-400 font-extrabold text-3xl">.</p>
                </div>
                <div>
                    <ul className="flex gap-6">
                        <li className="cursor-pointer font-normal hover:font-semibold">
                            Home
                        </li>
                        <li className="cursor-pointer font-normal hover:font-semibold">
                            Key Feature
                        </li>
                        <li className="cursor-pointer font-normal hover:font-semibold">
                            Pricing
                        </li>
                        <li className="cursor-pointer font-normal hover:font-semibold">
                            Testiminial
                        </li>
                        <li className="cursor-pointer font-normal hover:font-semibold">
                            FAQ
                        </li>

                    </ul>
                </div>
                <div className=" flex justify-center w-20 h-8 rounded-md bg-blue-600 cursor-pointer">
                    <h1 className="text-white mt-1 font-medium hover:text-black">
                        Log in
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
