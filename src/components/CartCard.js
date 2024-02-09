import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
import "./CartCard.css";

export const CartCard = ({item}) => {
  const dispatch = useDispatch();
 const {id, name, price} = item;
 const image = `../assets/images/${id}.png`;

  return (
 
    <div className="cartCard">
      <img src={image} alt={name}/>
      <span className="productName">{name}</span>
      <span className="productPrice">${price}</span>
      <button onClick={() => dispatch(remove(item))} >Remove</button>
    </div>
 )
}
