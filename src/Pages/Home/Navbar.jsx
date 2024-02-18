import { NavLink } from "react-router-dom";
import logo from "/logo.png"


const Navbar = () => {

    const links = <>
    
    <li className="hover:bg-[#75b239] rounded-md">
        <NavLink className={({isActive, isPending})=>isPending ? "pending" : isActive ? "text[#75b239] font-bold" : " "}>Home</NavLink>
    </li>
    <li className="hover:bg-[#75b239] rounded-md">
        <NavLink className={({isActive, isPending})=>isPending ? "pending" : isActive ? "text[#75b239] font-bold" : " "}>Blog</NavLink>
    </li>
    <li className="hover:bg-[#75b239] rounded-md">
        <NavLink className={({isActive, isPending})=>isPending ? "pending" : isActive ? "text[#75b239] font-bold" : " "}>Tips</NavLink>
    </li>
    
    </>

    return (
        <div>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar bg-[#107A00] text-white">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2"><img className="w-16" src={logo} alt="" /></div>
                        <div className="flex-1 hidden lg:block">
                            <ul className="menu menu-horizontal font-bold ">
                                {/* Navbar menu content here */}
                                {links}
                            </ul>
                        </div>
                    </div>
                    {/* Page content here */}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200">
                        {/* Sidebar content here */}
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;