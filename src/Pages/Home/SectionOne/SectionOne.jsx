import React from 'react';
import img from '../../../assets/car-logo.jpg'

const SectionOne = () => {
    return (
        
        <div className="hero py-20 bg-base-200 my-20">
        <div className="hero-content flex-col lg:flex-row">
          <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-3xl font-bold">Best Cars Toy Manufacturing Company</h1>
            <div className='text-center'>
            <p className="py-6">1. LEGO RACING CARS SET</p>
            <p className="py-6">2. THINK GIZMOS</p>
            <p className="py-6">3. HOT WHEELS</p>
            <p className="py-6">4. FISHER-PRICE</p>
            <p className="py-6">5. DICKIE TOYS</p>
            <p className="py-6">6. MELISSA & DOUG</p>
            </div>
          
            
          </div>
        </div>
      </div>
    );
};

export default SectionOne;