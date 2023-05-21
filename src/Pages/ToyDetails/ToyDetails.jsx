import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useHooks from '../../Hooks/UseHooks';

const ToyDetails = () => {
  useHooks('Toy Details')
    const toyDetails = useLoaderData();
    const {photo,name, sellerEmail,category,price, rating,quantity,description,sellerName} = toyDetails;
    return (
        
        <div className="card w-2/4 bg-base-100 shadow-xl mx-auto">
            <h2 className='text-center text-3xl '>Detail's of {name}</h2>
        <figure className="px-10 pt-10">
            
          <img src={photo} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Toy Name: {name}</h2>
          <p>Seller Name: {sellerName}</p>
          <p>Seller Email: {sellerEmail}</p>
          <p>Toy Category: {category}</p>
          <p>Price: {price}</p>
          <p>Rating: {rating}</p>
          <p>Quantity: {quantity}</p>
          <p>Details: {description}</p>
         
        </div>
      </div>
    );
};

export default ToyDetails;