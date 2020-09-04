import React from 'react'
import Title from './Title'
import src from '../images/hero_3.jpg'

export default function Aboutus() {
    return (
        <>
            <section className="history">
                <Title title="History"/>
                <div className="history-center">
                    <div className="history-center-left">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nobis magni eaque velit eum, id rem eveniet dolor possimus voluptas..</p>
                        <p>Est non aute sunt aliqua amet dolore esse.</p>
                        <a href="https://vimeo.com/28959265" className="link">Watch video</a>
                    </div>
                    <div className="history-center-right">
                        <img src={src} className="img-fluid"/>
                    </div>
                </div>
                
            </section>
        </>
    )
}
