import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import AboutContainer from '../components/AboutContainer';

export default function About() {
    return (
        <>
            <Hero hero="aboutHero">
                <Banner title="About us" subtitle="">
                    <Link to='/' className="btn-primary">Home</Link>
                </Banner>
            </Hero>
            <AboutContainer/>
            
        </>
    )
}
