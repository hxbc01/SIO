import Image from "next/image";
import bola from "public/Image/bola.png";
const Corousel = () => {
    return (
        <div className="container mt-24">
            <div className="flex justify-between mx-52">
                <div className="mt-12">
                    <h1 className="text-8xl font-bold font-['Arial']">
                        Benefits of regular exercise
                    </h1>
                    <div className="flex">
                        <div className="w-14 mt-5 border-t-4 border-slate-400">
                        </div>
                        <p className="mt-1 mx-2 text-2xl font-['Arial'] text-red-400 font-bold">What We Do</p>
                    </div>
                    <div className="mt-6 ">
                        <p className="w-80">
                            At our fitness studio, you can experience the best level
                            of customer service
                        </p>
                        <div className=" flex justify-center w-32 h-10 mt-6 rounded-md bg-blue-600 cursor-pointer">
                            <h1 className="text-white mt-2 font-medium hover:text-black">
                                Contact Us
                            </h1>
                        </div>
                    </div>
                </div>
                <div>
                    <Image
                        src={bola}
                        alt="astrnot bola"
                        height={600}
                        width={800}
                    />
                </div>
            </div>
        </div>
    );
}

export default Corousel;
