import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Pages/Shared/Footer/Footer";
import Navbar from "../components/Pages/Shared/Navbar/Navbar";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";


const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');
    return (
        <div>
            <ScrollToTop></ScrollToTop>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;