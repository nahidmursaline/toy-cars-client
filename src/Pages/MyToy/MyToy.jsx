import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import useHooks from '../../Hooks/UseHooks';
import { AuthContext } from '../../Providers/AuthProvider';
import MyToyRow from './MyToyRow';

const MyToy = () => {
  useHooks('My Toy')
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);

  const url = `https://toy-cars-server-omega.vercel.app/addToy?sellerEmail=${user.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  const handleDelete = (id) => {
    const proceed = confirm('Seriously! You Want to DELETE?');
    if (proceed) {
      fetch(`https://toy-cars-server-omega.vercel.app/addToy/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert('Deleted Successful');
            const remaining = toys.filter((toy) => toy._id !== id);
            setToys(remaining);
          }
        });
    }
  };

  const handleUpdate = (id) => {
    fetch(`https://toy-cars-server-omega.vercel.app/addToy/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ status: 'updated' }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
        }
      });
  };

  return (
    <div>
      <h2 className='text-center font-bold my-20 text-xl mb-20'>My Toy's: {toys.length}</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Car Name + Category</th>
              <th>Seller Name</th>
              <th>Seller Email</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Quantity</th>
              <th>Description</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <MyToyRow
                key={toy._id}
                toy={toy}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
              ></MyToyRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToy;
