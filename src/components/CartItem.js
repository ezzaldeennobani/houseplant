import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/cartSlice';

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseQuantity(cartItem));
  };

  const handleDecrease = () => {
    if (cartItem.quantity > 1) {
      dispatch(decreaseQuantity(cartItem));
    }
  };

  const handleRemove = () => {
    dispatch(removeFromCart(cartItem));
  };

  return (
    <div className="cart-item">
      <img src={cartItem.image} alt={cartItem.name} style={{ width: '100px' }} />
      <div>
        <h3>{cartItem.name}</h3>
        <p>Price: ${cartItem.price}</p>
        <p>Quantity: {cartItem.quantity}</p>
        <div className="cart-item-actions">
          <button onClick={handleDecrease} disabled={cartItem.quantity <= 1}>-</button>
          <span>{cartItem.quantity}</span>
          <button onClick={handleIncrease}>+</button>
          <button onClick={handleRemove}>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
