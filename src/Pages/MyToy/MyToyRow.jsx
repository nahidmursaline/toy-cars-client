import React from 'react';

const MyToyRow = ({toy, handleDelete, handleUpdate}) => {
    const {_id,photo,name, sellerEmail,category,price, rating,quantity,description,sellerName } = toy;








    return (
        <tr>
        <th>
        <button onClick={()=>handleDelete(_id)} className="btn btn-sm btn-circle">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-24 h-24">
                <img src={photo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{category}</div>
            </div>
          </div>
        </td>
        <td>
          {sellerName}
         
        </td>
        <td>{sellerEmail}</td>
        <td>${price}</td>
        <td>{rating}</td>
        <td>{quantity}</td>
        <td>{description}</td>
       
        
        <th>
          <button onClick={()=>handleUpdate(_id)} className="btn btn-error btn-xs">Update</button>
        </th>
      </tr>
    );
};

export default MyToyRow;