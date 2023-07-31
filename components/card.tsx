import Image from "next/image";
import target from "public/Image/target.png";
import sports from "public/Image/sports.png";
import atom from "public/Image/atom.png";
import text from "public/Image/text-books.png"


const Card = () => {
    return (
        <div className="container mt-24 mb-32">
            <div className="flex justify-center">
                <div className="flex justify-center items-center gap-14 w-auto h-44 bg-gray-200 rounded-lg p-2">
                    <div className="w-auto h-40 hover:bg-white hover:transition duration-300 ease-in-out rounded-md drop-shadow-lg">
                        {/* box pertama */}
                        <div className="mx-2">
                            <Image
                                src={target}
                                alt="icon target"
                                width={60}
                                height={50}
                            />
                            <h4 className="text-md mt-4 mb-2">QUALITY SERVICE</h4>
                            <div className="flex gap-1">
                                <p className="text-sm text-gray-400">at our fitness /</p>
                                <div className="w-14 h-6 bg-orange-300 rounded-md">
                                    <p className="text-center">studio</p>
                                </div>
                            </div>
                            <div className="w-10 h-6 bg-white rounded-md">
                                <p className="text-center">Pro</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-auto h-40 hover:bg-white hover:transition duration-300 ease-in-out rounded-md drop-shadow-lg">
                        {/* box pertama */}
                        <div className="mx-2">
                            <Image
                                src={atom}
                                alt="icon target"
                                width={60}
                                height={50}
                            />
                            <h4 className="text-md mt-4 mb-2">SPACIOUS GYM</h4>
                            <div className="flex gap-1">
                                <p className="text-sm text-gray-400">at our fitness /</p>
                                <div className="w-14 h-6 bg-green-300 rounded-md">
                                    <p className="text-center">studio</p>
                                </div>
                            </div>
                            <div className="w-10 h-6 bg-white rounded-md">
                                <p className="text-center">Pro</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-auto h-40 hover:bg-white hover:transition duration-300 ease-in-out rounded-md drop-shadow-lg">
                        {/* box pertama */}
                        <div className="mx-2">
                            <Image
                                src={sports}
                                alt="icon target"
                                width={60}
                                height={50}
                            />
                            <h4 className="text-md mt-4 mb-2">UNIQUE PROGRAM</h4>
                            <div className="flex gap-1">
                                <p className="text-sm text-gray-400">at our fitness /</p>
                                <div className="w-14 h-6 bg-green-300 rounded-md">
                                    <p className="text-center">studio</p>
                                </div>
                            </div>
                            <div className="w-10 h-6 bg-white rounded-md">
                                <p className="text-center">Pro</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-auto h-40 hover:bg-white hover:transition duration-300 ease-in-out rounded-md drop-shadow-lg">
                        {/* box pertama */}
                        <div className="mx-2">
                            <Image
                                src={text}
                                alt="icon target"
                                width={60}
                                height={50}
                            />
                            <h4 className="text-md mt-4 mb-2">GROUP CLASSES</h4>
                            <div className="flex gap-1">
                                <p className="text-sm text-gray-400">at our fitness /</p>
                                <div className="w-14 h-6 bg-green-300 rounded-md">
                                    <p className="text-center">studio</p>
                                </div>
                            </div>
                            <div className="w-10 h-6 bg-white rounded-md">
                                <p className="text-center">Pro</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;