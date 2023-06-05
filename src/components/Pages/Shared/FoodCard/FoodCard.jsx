import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../provider/Authprovider";
import Swal from "sweetalert2";
import useCart from "../../../../hooks/useCart";

const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const navigate = useNavigate();
    const location = useLocation();
    const [,refetch] = useCart();  
    const { user } = useContext(AuthContext);
    const handleAddToCart = () => {
        const orderItem = { menuItemId: _id, image:image, name: name, price: price, recipe: recipe, email: user?.email }
        if (user ) {
            fetch('http://localhost:3200/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'top',
                            icon: 'success',
                            title: 'Your product has been added successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'do you want to login now?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'login now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from: location}})
                }
            })
        }
    }


    return (
        <div>
            <div className="card w-96 bg-base-100 h-full shadow-xl">

                <figure className="">
                    <img src={image} alt="Shoes" className="rounded-xl" />

                </figure>
                <p className="absolute bg-slate-900 text-white p-2 top-0 right-0 mr-4 mt-4 rounded-lg">${price}</p>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                        <button onClick={() => handleAddToCart(item)}>
                            <Link  className="btn btn-outline bg-slate-300 text-green-500 hover:border-yellow-500  border-yellow-500 hover:bg-slate-900 border-0 border-b-4">Buy Now</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;