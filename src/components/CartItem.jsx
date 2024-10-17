import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { remove } from '../Redux/Slices/CartSlice';

const CartItem = ({item,itemIndex}) => {
    const dispatch = useDispatch();

    const removeFromCart = () =>{
        dispatch(remove(item.id));
        toast.success("Item removed from Cart");
    }
  return (
    <div>
        <div>
            <img src={item.image} alt="" />
        </div>
        <div>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
        </div>
        <div>
            <p>
                {item.price}
            </p>
            <button onClick={removeFromCart}>
                <MdDelete />
            </button>
            
        </div>
    </div>
  )
}
export default CartItem;