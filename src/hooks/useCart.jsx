import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../provider/Authprovider';
const useCart = () => {
    const {user} = useContext(AuthContext);
    const {  refetch, data: cart = [] } = useQuery({
        queryKey: ['cart',user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:3200/carts?email=${user?.email}`);
            return response.json()
        },
      })
      return [cart, refetch]
}

export default useCart;