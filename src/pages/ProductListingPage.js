import React from 'react';
import PlantCard from '../components/PlantCard'; // Component for each plant

const plants = [
  { id: 1, name: 'Aloe Vera', price: 10, category: 'Succulents', image: '/images/aloe.jpg' },
  { id: 2, name: 'Snake Plant', price: 15, category: 'Indoor Plants', image: '/images/snake.jpg' },
  // More plants...
];

const ProductListingPage = () => {
  const categories = ['Succulents', 'Indoor Plants', 'Flowering Plants'];

  return (
    <div className="product-listing">
      {categories.map(category => (
        <div key={category}>
          <h2>{category}</h2>
          <div className="plant-grid">
            {plants.filter(plant => plant.category === category).map(plant => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListingPage;
