import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem'

const Cart = () => {
    const {cart} = useSelector((state) => (state));
    const [totalAmount,setTotalAmount]=useState(0);

    useEffect(() => {
        setTotalAmount(cart.reduce((acc,curr) => acc+curr.price ,0))
    })
  return (
    <div>
        {
            cart.length > 0 ?
            
            (<div>
                <div>
                    {
                        cart.map((item,index) => {
                        return <CartItem item={item.id} item={item} itemIndex={index} />
                    })
                    }
                    
                </div>
                <div>
                    <div>Your Cart</div>
                    <div>Summary</div>
                    <p>Total Items: <span>{cart.length}</span></p>
                </div>

                <div>
                    <p>Total Amount: <span>${totalAmount}</span></p>
                    <button>Checkout Now</button>
                </div>
                </div>)
            
             :
            (
                <div>
                    <p>No items</p>
                    <NavLink to="/">
                        <button>
                            Shop Now
                        </button>
                    </NavLink>
                </div>
            )
        }
    </div>
  )
    }
 export default Cart;