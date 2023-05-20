import React from 'react';

const AllToysCard = ({toy}) => {
    const {_id,name,category,price, quantity, sellerName } = toy
    return (
        <tr>
       
        <td>{sellerName}</td>
        <td>{name}</td>
        <td>{category}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td><button className='btn btn-error btn-xs'>View Details</button></td>
      </tr>
    );
};

export default AllToysCard;