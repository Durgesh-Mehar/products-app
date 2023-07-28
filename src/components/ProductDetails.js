// ProductDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${productId}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error(error));
  }, [productId]);
  console.log(product.images)

  return (
    <div>
      <h2>Product Details</h2>
      <h3>Name: {product.brand}</h3>
      <h5>Name: {product.title}</h5>
      <p>Price: $ {product.price}</p>
      <p>Category: {product.category}</p>
       {product.images.map(img => (
          <img src={img} alt="A Product Image" />
        ))}
      <p>Description: {product.description}</p>
      <p>Rating: {product.rating}</p>
      
      

      {/* Add more product details here */}
    </div>
  );
};

export default ProductDetails;
