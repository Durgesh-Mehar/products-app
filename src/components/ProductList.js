// ProductList.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
console.log(products)
  useEffect(() => {
    axios.get(`https://dummyjson.com/products`)
      .then(response => setProducts(response.data.products))
      .catch(error => console.error(error));
  }, [categoryId]);

  // Pagination related code here...

  return (
    <div>
      <h2>Products in Category</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
      {/* Pagination component goes here */}
    </div>
  );
};

export default ProductList;
