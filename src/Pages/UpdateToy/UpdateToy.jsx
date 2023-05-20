import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToy = () => {
  const updateToy = useLoaderData();
  const { _id, name, quantity, description, price, rating } = updateToy;

  const handleUpdateToy = (event) => {
    event.preventDefault();
    const form = event.target;

    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const data = {
      price,
      rating,
      quantity,
      description,
    };

    fetch(`https://toy-cars-server-omega.vercel.app/addToy/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Toys Information Updated Successfully',
            icon: 'success',
            confirmButtonText: 'YAWOO',
          });
        }
      });
  };

  return (
    <div>
      <h2 className="text-center my-6">Update Toy's Information: {name}</h2>
      <form onSubmit={handleUpdateToy}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              defaultValue={price}
              placeholder="Price"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              defaultValue={rating}
              name="rating"
              placeholder="Rating"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input
              type="text"
              defaultValue={quantity}
              name="quantity"
              placeholder="Available Quantity"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Detail Description</span>
            </label>
            <input
              type="text"
              defaultValue={description}
              name="description"
              placeholder="Detail Description"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-error btn-block"
            type="submit"
            value="Update Toy"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateToy;
