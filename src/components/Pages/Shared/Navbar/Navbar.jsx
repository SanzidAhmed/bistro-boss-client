import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../provider/Authprovider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../../hooks/useCart";
const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart()

    const handleLogOut = () => {
        logOut()
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.log(error.message);
        })
    }



    const navOptions = <><li><Link>Home</Link></li>
        <li tabIndex={0}>
            <Link>Contact us</Link>
        </li>
        <li><Link>Dashboard</Link></li>
        <li><Link to="/menu">Our menu</Link></li>
        <li><Link to="/shop/popular">Our shop</Link></li>
        <li><Link className=" "><FaShoppingCart />
            <div className="badge badge-secondary">+{cart?.length || 0}</div></Link></li>
    </>
    return (
        <div>
            <div className="navbar fixed z-30 bg-opacity-40 text-white bg-black max-w-screen-xl h-28">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content text-black mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost font-extrabold text-xl my-5 uppercase">BISTRO BOSS <br /> Restaurant</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end mr-10">
                    {user && <div className="dropdown dropdown-end text-black">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu  dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li onClick={handleLogOut}><a>Logout</a></li>
                        </ul>
                    </div>}
                    {!user && <Link to="/login">Login</Link>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;