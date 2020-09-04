import React, {Component, useEffect} from 'react'
import { Map, GoogleApiWrapper, Marker, DirectionsRenderer} from 'google-maps-react';

const mapStyles = {
  width: "100%",
  height: "100%",
  overflowX: "hidden",
  overflowY: "hidden"
  };

const containerStyle = {
  width: "95%",
  height: "100%"
 };

class MapContainer extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        stores: [{latitude: 1.361185, longitude: 103.812534}],
        user: null
      }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) =>  {
          this.setState({
              user: {latitude: position.coords.latitude, longitude: position.coords.longitude}
          })
        });   
    }

    displayUsers = () => {
        console.log(this.state.user)
        return <Marker position={{
            lat: this.state.user.latitude,
            lng: this.state.user.longitude
          }}/>
    }

    displayMarkers = () => {
      return this.state.stores.map((item, index) => {
        return <Marker key={index} id={index} position={{
         lat: item.latitude,
         lng: item.longitude
       }}/>
      })
    }
  
    render() {
      return (
          <Map
            google={this.props.google}
            zoom={10}
            style={mapStyles}
            containerStyle={containerStyle}
            initialCenter={{ lat: 1.361185, lng: 103.812534}}
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