import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar";
import Banner from "../Pages/Home/Banner";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Banner></Banner>
        </div>
    );
};

export default Main;