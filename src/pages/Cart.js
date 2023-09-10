import React from 'react';
import { useCart } from '../components/CartContext';
import CartCard from '../components/CartCard'; // Import the CartCard component
import '../styles/Cart.css'

const Cart = () => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } = useCart();
  const calculateTotalQuantity=()=>{
    return cart.reduce((total, item) => total + item.quantity, 0);
  }
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <h2 style={{fontSize: '1.5em',margin: '3.5em 0 0 1.5em',
       fontWeight: 650,}}>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className='single-cart-container'>
          {cart.map((item) => (
            <CartCard
              key={item.id}
              item={item}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
              removeFromCart={removeFromCart}

            />
          ))}
        
          <p className='cart-total'>Total Quantity: {calculateTotalQuantity()}</p>
          <p className="cart-total">Grand Total: ₹{calculateTotalPrice()}</p>
          <button className='checkout'>CheckOut</button>
          </div>
      )}
    </div>
  );
};

export default Cart;
