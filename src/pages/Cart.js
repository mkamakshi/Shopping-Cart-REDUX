import { useSelector } from "react-redux";
import { useTitle } from '../hooks/useTitle';
import {CartCard} from "../components/CartCard";

export const Cart = ({title}) => {
  useTitle(title);
  const cartList = useSelector(state => state.cartState.cartList);
  const total = useSelector(state => state.cartState.total);

  return (
    <main  className="min-h-screen, max-w-screen-xl,m-auto,p-10">
    <div className='mx-0 my-30'>
    <h1 className='text-2xl font-bold text-center'>Cart Items : {cartList.length} / ${total}</h1>
    </div>
    { cartList.map((item) => (
               <CartCard key={item.id} item={item} />
          )) }
    </main>
  )
}
