import React from 'react';
import useHooks from '../../../Hooks/UseHooks';
import Gallery from '../Gallery/Gallery';
import SectionOne from '../SectionOne/SectionOne';
import Slider from '../Slider/Slider';
import SectionTwo from './SectionTwo/SectionTwo';

const Home = () => {
    useHooks('Home')
    return (
        <div>
            <Slider></Slider>
            <Gallery></Gallery>
            <SectionOne></SectionOne>
            <SectionTwo></SectionTwo>
        </div>
    );
};

export default Home;