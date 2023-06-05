import { NavLink, Outlet } from "react-router-dom";
import { FaCalendarAlt, FaHome, FaShoppingCart, FaWallet } from 'react-icons/fa';
import useCart from "../hooks/useCart";


const DashBoard = () => {
    const [cart] = useCart();
    return (
        <div className="drawer drawer-mobile flex-row-reverse md:gap-20">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content mt-20 text-center w-full">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-orange-400 text-base-content">
                    <li><NavLink to="/"><FaHome></FaHome> User home</NavLink></li>
                    <li className="inline-flex"><NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart <div className="badge badge-secondary bg-white text-pink-800 border-white">+{cart?.length || 0}</div></NavLink></li>
                    <li><NavLink  to="/dashboard/reservation"><FaCalendarAlt></FaCalendarAlt> Reservation</NavLink></li>
                    <li><NavLink to="/dashboard/history"><FaWallet></FaWallet>  Payment History</NavLink></li>
                    <div className="flex flex-col w-full">
                        <div className="divider"></div>
                    </div>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;