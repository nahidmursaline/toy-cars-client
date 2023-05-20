import React from 'react';
import { Link } from 'react-router-dom';

const AllToysCard = ({toy}) => {
    const {_id,name,category,price, quantity, sellerName } = toy
    return (
        <tr>
       
        <td>{sellerName}</td>
        <td>{name}</td>
        <td>{category}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td><Link to={`/toyDetails/${_id}`}><button className='btn btn-error btn-xs'>View Details</button></Link></td>
      </tr>
    );
};

export default AllToysCard;