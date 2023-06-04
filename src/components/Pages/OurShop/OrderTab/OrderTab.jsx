import FoodCard from "../../Shared/FoodCard/FoodCard";

const OrderTab = ({ items }) => {

    

    return (
        <div className="grid md:grid-cols-3 gap-8 mx-auto" >
            {
                items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
        </div >

    );
};

export default OrderTab;