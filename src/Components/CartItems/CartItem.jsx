import React, { useContext } from 'react'
import './CartItem.css'
import { ShopContext } from '../../Context/ShopContext'
import {AiFillDelete} from 'react-icons/ai'
import { Link } from 'react-router-dom'
const CartItem = () => {
    const {all_product,cartItems,removeFromCart,getTotalCartAmount} = useContext(ShopContext)
  return (
    <div className='container'>
         <div className='Cartitem'>

      <div className='format'>
      <div className="Cartitem-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Clear</p>
        </div>
        
        {all_product.map((e) => {
            if(cartItems[e.id]>0){
                return<div>
                <div className="Cartitem-format Cartitem-format-main">
                    <img src={e.image} className='Cartitem-product-icon' alt="" />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='Cartitem-quantity'>{cartItems[e.id]}</button>
                    <p>${e.new_price*cartItems[e.id]}</p>
                    <AiFillDelete className='remove-icon'  onClick={() => {removeFromCart(e.id)}}/>
                </div>
            </div>
            }
            return null;
        })}
      </div>
        <div className='cartitem-down'>
            <div className='cartitem-total'>
                <h1>Cart Total</h1>
                <div>
                    <div className='cartitem-total-item'>
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
             
                    <div className="cartitem-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                
                    <div className='cartitem-total-item'>
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button><Link to='/login' className='link-chick'>PROCECD TO CHECKOUT</Link></button>
            </div>
            <div className="cartitems-promocode">
                <p>If you have a promo code, Enter it here</p>
                <div className='cartitems-promobox'>
                    <input type="text" placeholder=' promo code' />
                    <button>Subment</button>
                </div>
            </div>
        </div>
     
    </div>
    </div>
  )
}

export default CartItem
