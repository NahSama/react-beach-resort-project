import MapContainer from './MapContainer'
import React, { Component, useContext } from 'react'
import {MapContext} from '../MapContext'

export default class Modal extends Component {

    static contextType = MapContext

    

    render() {

        let {selected, toggle} = this.context
        const handleClick = (e) => {
            if(e.target.classList.contains("backdrop")){
                toggle()
            }
        } 

        return (
            <div className="backdrop" onClick={handleClick}
            >
                <MapContainer className="map" containerStyle={ {
                                                                width: "80%",
                                                                height: "100%",
                                                                left: "10%",
                                                                }} zoom={12}/>
            </div>
        )
    }
}

