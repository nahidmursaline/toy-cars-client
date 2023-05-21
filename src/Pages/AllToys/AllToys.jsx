import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useHooks from '../../Hooks/UseHooks';
import AllToysCard from './AllToysCard';

const AllToys = () => {
  useHooks('All Toys')
    const toys = useLoaderData();
  //   const [searchQuery, setSearchQuery] = useState("");
  //   const [alltoys, setAlltoys] = useState(toys);

  //   useEffect(()=>{
  //     fetch('https://toy-cars-server-omega.vercel.app/addAllToys')
  //     .then(res=> res.json())
  //     .then(data => setAlltoys(data))
  //   },[])


  //   const handleSearch = (event) => {
  //     setSearchQuery(event.target.value);
  //   };
  //   const filteredToys = alltoys.filter((toy) =>
  //   toy.name.toLowerCase().includes(searchQuery.toLowerCase())
  // );
    return (
        <div>
            <h2 className='text-center text-3xl font-bold my-20'>All Toy's: {toys.length}</h2>

            {/* <input onChange={handleSearch} type="search"  /> */}

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