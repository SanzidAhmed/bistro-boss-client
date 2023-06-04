import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItems from "../../Shared/MenuItems/MenuItems";



const MenuCategory = ({ items, img, title, subTitle, route,heading, subHeading }) => {
    return (
        <div>
            {title && <Cover img={img} title={title} subtitle={subTitle}></Cover>}
            {heading && <div className="w-4/12 mx-auto my-8">
                <p className="text-yellow-500 text-center mb-2">---{subHeading}---</p>
                <h3 className="text-center text-4xl font-semibold border-y-4 py-4">{heading}</h3>
            </div>}
            <div className="grid gap-10 md:grid-cols-2 my-10 px-10 justify-center text-center">
                {
                    items.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
            {title && <div className="text-center my-4">
                <Link to={`/shop/${route}`} className="btn btn-outline bg-slate-300 text-green-500 hover:border-yellow-500  border-yellow-500 hover:bg-slate-900 border-0 border-b-4">Order your favorite food</Link>
            </div>}
        </div>
    );
};

export default MenuCategory;