import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import MyToyRow from './MyToyRow';

const MyToy = () => {
    const {user} = useContext(AuthContext)
    const [toys, setToys] = useState([]);


    const url = `http://localhost:5000/addToy?sellerEmail=${user.email}`;

    useEffect(()=> {
        fetch(url)
        .then(res=> res.json())
        .then(data => {
            setToys(data)
        })
    },[])


    const handleDelete = id => {
        const proceed = confirm('Seriously! You Want to DELETE?');
        if(proceed){
            fetch(`http://localhost:5000/addToy/${id}`,{
                method: 'DELETE'
            })
            .then(res=> res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    alert('Deleted Successful')
                    const remaining = toys.filter(toy =>toy._id !== id)
                    setToys(remaining);
                }
            })
        }
    }
    


    return (
        <div>
            <h2>My Toys</h2>
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
        <th></th>
      </tr>
    </thead>
    <tbody>
        {
            toys.map(toy=> <MyToyRow
            key={toy._id}
            toy = {toy}
            handleDelete = {handleDelete}
            ></MyToyRow>)
        }
      
     
     
      
     
    </tbody>
   
   
    
  </table>
</div>
        </div>
    );
};

export default MyToy;