import React, { Component } from 'react'
import {defaultBcg} from "../images/room-1.jpeg";
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {RoomContext} from '../Context'
import StyledHero from '../components/StyledHero'

export default class Singleroom extends Component {
    constructor(props) {
        super(props)

        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg: defaultBcg
                 
        }
    }
    
    static contextType = RoomContext;

    // componentDidMount(){

    // }
    

    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug)
        
        //check if room exists
        if(!room) {
            return (
            <div className="error">
                <h3>No such room could be found...</h3>
                <Link to='/rooms' className='btn-primary'>Back to rooms</Link>
            </div>
            )
        }

        const {name, description, capacity, size, price, extras, breakfast, pets, images} = room;

        const [mainImg, ...otherImgs] = images;

        return (
            <>
                <StyledHero img={images[0]}>
                    <Banner title={`${name} room`}>
                        <Link to="/rooms" className="btn-primary">
                            Back to Rooms
                        </Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {otherImgs.map((item, index) => {
                            return <img key={index} src={item} alr={name}/>
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className="description">
                            <h3>Details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>Info</h3>
                            <h6>Price: ${price}</h6>
                            <h6>Size: {size} SQFT</h6>
                            <h6>Max Capacity: {capacity>1 ? `${capacity} people` : `${capacity} person`} </h6>
                            <h6>Pets: {pets ? 'Pets allowed' : 'No pets allowed'} </h6>
                            <h6>{breakfast && 'free breakfast included'} </h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h3>Extras</h3>
                    <ul className="extras">
                        {extras.map((extra,index) => {
                            return <li key={index}>{extra}</li>
                        })}
                    </ul>
                </section>
            </>
        )
    }
}
