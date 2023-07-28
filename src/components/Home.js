// Home.js (updated)
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
 console.log(categories)
 
  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories')
      .then(response => setCategories(response.data))
      .catch(error => console.error(error));
  }, []);
  
  const handleSearch = (query) => {
    // Perform search API call and set the searchResults state
    axios.get(` https://dummyjson.com/products/search?query=${query}`)
      .then(response => setSearchResults(response.data.products))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <div>
        <h2>Search Products</h2>
        <input type="text" placeholder="Enter product name" onChange={(e) => handleSearch(e.target.value)} />
        <ul>
          {searchResults.map(product => (
            
            <li key={product.id}>
              <Link to={`/product/${product.id}`}>{product.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <h1>Categories</h1>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            <Link to={`/category/${category.id}`}>{category}</Link>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default Home;
