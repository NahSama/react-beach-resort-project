import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../Context'
import Title from '../components/Title'

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function Roomfilter({rooms}) {
    const context = useContext(RoomContext);
    const {
        handleChange, type, capacity, price, minPrice, maxPrice, pets, breakfast, minSize, maxSize 
    } = context;
    
    let types = getUnique(rooms, 'type');
    types = ['all', ...types];
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })

    let capacities = getUnique(rooms, 'capacity');
    capacities = capacities.sort((a,b) => a - b).map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })
    return (
        <>
            <section className="filter-container">
                <Title title="search rooms"></Title>
                <form className="filter-form">
                    {/*start select type*/}
                    <div className="form-group">
                        <label htmlFor="type" className="form-label">room type</label>
                        <select name="type" 
                                id="type" 
                                value={type} 
                                className="form-control" 
                                onChange={handleChange}>
                                    {types}
                        </select>
                    </div>
                    {/*end select type*/}
                    
                    {/*start select capacity*/}
                    <div className="form-group">
                        <label htmlFor="capacity" className="form-label">Guests</label>
                        <select name="capacity"
                                id="capacity"
                                value={capacity}
                                className="form-control"
                                onChange={handleChange}>
                                    {capacities}
                        </select>
                    </div>
                    {/*end select type*/}

                    {/**start room price */}
                    <div className="form-group">
                        <label htmlFor="price" className="form-label">Room Price ${price}</label>
                        <input 
                            type="range" 
                            name="price" 
                            min={minPrice} 
                            max={maxPrice} 
                            id="price" 
                            value={price} 
                            onChange={handleChange} 
                            className="form-control"/>
                    </div>
                    {/**end of room price */}

                    {/**size */}
                    <div className="form-control">
                        <label htmlFor="size">room size</label>
                        <div className="size-inputs">
                            <input type="number" 
                                name="minSize" 
                                id="size" 
                                value={minSize} 
                                onChange={handleChange} 
                                className="size-input"/>
                            <input type="number" 
                                name="maxSize" 
                                id="size" 
                                value={maxSize} 
                                onChange={handleChange} 
                                className="size-input"/>
                        </div>
                    </div>
                    {/**end of size */}

                    {/**extras */}
                    <div className="form-group">
                        <div className="single-extra">
                            <input 
                                type="checkbox"
                                name="breakfast"
                                id="breakfast"
                                checked={breakfast}
                                onChange={handleChange}
                            />
                            <label htmlFor="breakfast">Breakfast Included</label>
                        </div>
                        <div className="single-extra">
                            <input 
                                type="checkbox"
                                name="pets"
                                id="pets"
                                checked={pets}
                                onChange={handleChange}
                            />
                            <label htmlFor="pets">Pets are allowed</label>
                        </div>
                    </div>
                    {/**end of extras */}
                </form>
            </section>
        </>
    )
}
