import React from 'react';
import useHooks from '../../../Hooks/UseHooks';
import Gallery from '../Gallery/Gallery';
import Slider from '../Slider/Slider';

const Home = () => {
    useHooks('Home')
    return (
        <div>
            <Slider></Slider>
            <Gallery></Gallery>
            <h2>this is home</h2>
        </div>
    );
};

export default Home;