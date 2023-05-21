import React from 'react';
import gallery1 from '../../../assets/Gallery/gallery1.jpg';
import gallery2 from '../../../assets/Gallery/gallery2.jpg';
import gallery3 from '../../../assets/Gallery/gallery3.jpg';
import gallery4 from '../../../assets/Gallery/gallery4.jpg';
import gallery5 from '../../../assets/Gallery/gallery5.jpg';
import gallery6 from '../../../assets/Gallery/gallery6.jpg';
import gallery7 from '../../../assets/Gallery/gallery7.jpg';
import gallery8 from '../../../assets/Gallery/gallery8.jpg';
import gallery9 from '../../../assets/Gallery/gallery9.jpg';
import gallery10 from '../../../assets/Gallery/gallery10.jpg';
import gallery11 from '../../../assets/Gallery/gallery11.jpg';

const Gallery = () => {
    return (
        <div className='my-20' data-aos="fade-up-left ">
          <h2 className='text-center py-6 font-bold text-3xl'>Photo Gallery Of Car Toy's</h2>
            <div  className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              
      <div className="p-4">
        <img src={gallery1} alt="Car 1" className="w-full h-auto" />
      </div>
      <div className="p-4">
        <img src={gallery2} alt="Car 2" className="w-full h-auto" />
      </div>
      <div className="p-4">
        <img src={gallery3} alt="Car 2" className="w-full h-auto" />
      </div>
      <div className="p-4">
        <img src={gallery11} alt="Car 2" className="w-full h-auto" />
      </div>
      <div className="p-4">
        <img src={gallery5} alt="Car 2" className="w-full h-auto" />
      </div>
      <div className="p-4">
        <img src={gallery6} alt="Car 2" className="w-full h-auto" />
      </div>
      <div className="p-4">
        <img src={gallery7} alt="Car 2" className="w-full h-full" />
      </div>
      <div className="p-4">
        <img src={gallery8} alt="Car 2" className="w-full h-auto" />
      </div>
      <div className="p-4">
        <img src={gallery10} alt="Car 2" className="w-full h-full" />
      </div>
      
    </div>
        </div>
    );
};

export default Gallery;