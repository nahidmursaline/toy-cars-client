import React from 'react';
import img from '../../../../assets/kid-playing-home.jpg'

const SectionTwo = () => {
    return (
        <div className="hero py-20 bg-base-200 mb-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={img} className="max-w-sm rounded-lg shadow-2xl ms-8" />
          <div >
            
            <h1 className="text-3xl font-bold">Discover The Thrilling Adventure Of Our Toy Cars</h1>

            <h3 className="mt-6 font-bold">Exciting Features for Every Car Enthusiast</h3>

            <p >Experience the excitement of realistic features and attention to detail with our toy cars. Many of our models boast functioning doors, opening hoods, and even working lights and sounds. Watch as your child's eyes light up when they activate the sirens on a police car or rev the engine of a roaring race car. Our toy cars provide an immersive and interactive experience that will captivate young minds and ignite their passion for the world of automobiles.</p>

            <h3 className="mt-6 font-bold">Quality and Durability Guaranteed</h3>

            <p >We understand the importance of providing durable and safe toys for children. That's why we meticulously curate our selection, partnering with renowned toy manufacturers who prioritize quality and adhere to strict safety standards. Each toy car in our inventory is built to last, ensuring hours of uninterrupted play and countless journeys to be taken.</p>
            
          </div>
        </div>
      </div>
    );
};

export default SectionTwo;