import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';

const ShoppingCartPage = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalPrice = useSelector(state => state.cart.totalPrice);

  return (
    <div>
      <h1>Your Shopping Cart</h1>
      {cartItems.length > 0 ? (
        cartItems.map(item => (
          <CartItem key={item.id} cartItem={item} />
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
      <h2>Total: ${totalPrice.toFixed(2)}</h2>
      <button>Checkout (Coming Soon)</button>
    </div>
  );
};

export default ShoppingCartPage;
