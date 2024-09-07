import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart ({totalQuantity})</Link>
       <Link to="/products"> Products </Link>
    </header>
  );
};

export default Header;
