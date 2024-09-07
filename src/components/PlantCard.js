import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const PlantCard = ({ plant }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} style={{ width: '100px' }} />
      <h3>{plant.name}</h3>
      <p>${plant.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default PlantCard;
