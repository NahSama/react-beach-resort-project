import React, {Component, useEffect} from 'react'
import { Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';
import {MapContext} from '../MapContext'

const mapStyles = {
  width: "100%",
  height: "100%",
  overflowX: "hidden",
  overflowY: "hidden"
  };

const containerStyle = {
  width: "95%",
  height: "100%",
 };

class MapContainer extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        stores: [{latitude: 1.361185, longitude: 103.812534, label: "Resort location."}],
        user: null
      }
    }

    static contextType = MapContext

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) =>  {
          this.setState({
              user: {latitude: position.coords.latitude, longitude: position.coords.longitude, label: "Your current location."}
          })
        });   
    }

    displayUsers = () => {
        return <Marker position={{
            lat: this.state.user.latitude,
            lng: this.state.user.longitude
          }} 
            label={{
            text: this.state.user.label,
            fontSize: "8px",
            fontWeight: "500",
            }}
        />
    }


    displayMarkers = () => {
      return this.state.stores.map((item, index) => {
        return <Marker key={index} id={index} position={{
         lat: item.latitude,
         lng: item.longitude
       }} 
        label={{
            text: item.label,
            fontSize: "8px",
            fontWeight: "500",}}/>
      })
    }
  
    render() {
        

      return (
          <Map
            google={this.props.google}
            zoom={this.props.zoom || 10}
            style={mapStyles}
            containerStyle={this.props.containerStyle || containerStyle}
            initialCenter={{ lat: 1.361185, lng: 103.812534}}
            onClick={this.context.toggle}
          >
            {this.displayMarkers()}
            {this.state.user && this.displayUsers()}
          </Map>
      );
    }
  }

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCDBlG0TA8uLujyq7hAmli8HJf5VkB5Xfg'
})(MapContainer);