import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToysCard from './AllToysCard';

const AllToys = () => {
    const toys = useLoaderData();
    return (
        <div>
            <h2>All Toys: {toys.length}</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head*/}
    <thead>
      <tr>
        
        <th>Seller Name</th>
        <th>Name</th>
        <th>Sub Category</th>
        <th>Price</th>
        <th>Available Quantity</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
    {
                toys.map(toy => <AllToysCard
                key={toy._id}
                toy = {toy}
                ></AllToysCard>)
            }
      
   
    </tbody>
  </table>
</div>
           
        </div>
    );
};

export default AllToys;