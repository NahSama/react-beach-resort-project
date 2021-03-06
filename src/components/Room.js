import React from 'react'
import {Link} from 'react-router-dom'
import defaultImg from '../images/room-1.jpeg'
import PropTypes from 'prop-types'
import {motion} from 'framer-motion'


export default function Room({room}) {

    const {name, slug, images, price} = room;

    return (
        <motion.article className="room" 
        initial={{opacity: 0}}
        animate={{opacity: 1}}>
            <div className="img-container" >
                <img src={images[0] || defaultImg} alt="single room" />
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                <Link to={`/rooms/${slug}`} className="btn-primary room-link">
                features
                </Link>
            </div>
            <p className="room-info">{name}</p>
        </motion.article>
    )
}

//Prop validation
Room.propTypes = {
    room: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired,
    })
}