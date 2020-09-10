import React, { Component } from 'react'

const MapContext = React.createContext();

class MapProvider extends Component {
    state = {
        selected: false
    }

    toggle = () => {
        this.setState({
            selected: !this.state.selected
        })
    }

    render() {
        return (
            <>
            <MapContext.Provider value={{...this.state, toggle: this.toggle}}>
                {this.props.children}
            </MapContext.Provider>
                
            </>
        )
    }
}

const MapConsumer = MapContext.Consumer;
export {MapProvider, MapConsumer, MapContext}