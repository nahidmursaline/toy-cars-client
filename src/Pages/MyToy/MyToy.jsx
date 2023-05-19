import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const MyToy = () => {
    const {user} = useContext(AuthContext)
    const [toys, setToys] = useState([]);


    const url = `http://localhost:5000/addToy?sellerEmail=${user.email}`;

    useEffect(()=> {
        fetch(url)
        .then(res=> res.json())
        .then(data => {
            console.log(data)
        })
    },[])
    return (
        <div>
            <h2>My Toys</h2>
        </div>
    );
};

export default MyToy;