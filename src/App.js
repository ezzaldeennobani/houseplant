import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage'; // Import your landing page component
import ProductListingPage from './pages/ProductListingPage'; // Import your product listing page
import ShoppingCartPage from './pages/ShoppingCartPage'; // Import your shopping cart page
import Header from './components/Header'; // Import your header component

function App() {
  return (
    <Router>
      <Header /> {/* Display the header on every page */}
      <Routes>
        <Route path="/" element={<LandingPage />} /> {/* Display landing page at the root */}
        <Route path="/products" element={<ProductListingPage />} /> {/* Display product listing */}
        <Route path="/cart" element={<ShoppingCartPage />} /> {/* Display shopping cart */}
      </Routes>
    </Router>
  );
}

export default App;
