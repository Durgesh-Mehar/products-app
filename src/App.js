// App.js
import React from 'react';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Routes, Route, } from "react-router-dom";
import Home from './components/Home';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';

const App = () => {
  return (
    
      <div>
        <Routes>
          {/* Home page */}
          <Route exact path="/" element={<Home />} />

          {/* Product listing page with pagination */}
          <Route path="/category/:categoryId" element={<ProductList/>} />

          {/* Product details page */}
          <Route path="/product/:productId" element={<ProductDetails/>} />
        </Routes>
      </div>
    
  );
};

export default App;
