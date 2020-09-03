import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
import Footer from '../components/Footer';

// import Img from '../components/StyledHero';

export default function Home() {
    return (
        <>
        <Hero>
            <Banner title="Luxurious rooms" subtitle="Deluxe rooms starting at $300">
                <Link to='/rooms' className="btn-primary">Our Rooms</Link>
            </Banner>
        </Hero>
        <Services />
        <FeaturedRooms />        
        </>
    )
}

