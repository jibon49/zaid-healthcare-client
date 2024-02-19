import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar";
import Banner from "../Pages/Home/Banner";
import ProductDetails from "../Pages/Home/ProductDetails";
import Features from "../Pages/Home/Features";
import BillingInfo from "../Pages/Home/BillingInfo";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Banner></Banner>
            <ProductDetails></ProductDetails>
            <Features></Features>
            <BillingInfo></BillingInfo>
        </div>
    );
};

export default Main;