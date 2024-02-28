import { BsTelephonePlus } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineMailOpen } from "react-icons/hi";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-white">
                <div>
                    <img className="w-40" src="/logo.png" alt="" />
                </div>
                <nav>
                    <h6 className="footer-title">Contact</h6>
                    <div className="grid grid-flow-col gap-4">
                        <div className="">
                            <div className='flex items-center gap-3 mb-5'>
                                <div className="border-2 p-2 rounded-full border-accent hover:scale-110 duration-300 hover:bg-accent hover:text-black hover:shadow-lg hover:shadow-accent">
                                    <BsTelephonePlus className='text-2xl  border-accent rounded-'></BsTelephonePlus>
                                </div>
                                <a className="link link-hover hover:text-accent">+8801800000000</a>
                            </div>

                            <div className='flex items-center gap-3 mb-5'>
                                <div className="border-2 p-2 rounded-full border-accent hover:scale-110 duration-300 hover:bg-accent hover:text-black hover:shadow-lg hover:shadow-accent">
                                    <HiOutlineMailOpen className='text-2xl'></HiOutlineMailOpen>
                                </div>
                                <a className="link link-hover hover:text-accent">zaidhealthcare@gmail.com</a>
                            </div>


                            <div className='flex items-center gap-3'>
                                <div className="border-2 p-2 rounded-full border-accent hover:scale-110 duration-300 hover:bg-accent hover:text-black hover:shadow-lg hover:shadow-accent">
                                    <CiLocationOn className='text-2xl'></CiLocationOn>
                                </div>
                                <a className="link link-hover hover:text-accent">Dhaka, Bangladesh</a>
                            </div>

                        </div>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;