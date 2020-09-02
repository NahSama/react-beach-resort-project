import React, { Component } from 'react'
import Client from './Contentful'
// import items from './data';

const RoomContext = React.createContext();
//<RoomContext.Provider value={}

class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    };
    
    //getData: make data on contentul to be local data
    getData = async () => {
        try {
            let response = await Client.getEntries({
                content_type: 'beachResortRoom',
                order: 'sys.createdAt'
            })
            let rooms = this.formatData(response.items);
            let featuredRooms = rooms.filter(room => room.featured === true);
            let maxPrice = Math.max(...rooms.map(item => item.price));
            let maxSize = Math.max(...rooms.map(item => item.size));
            this.setState(
                {
                rooms, 
                featuredRooms,  
                sortedRooms: rooms,
                loading: false,
                price: maxPrice,
                maxPrice,
                maxSize, 
            })
        } catch (error) {
            console.log(error)
        }
    }


    componentDidMount(){
        this.getData()
        
    }

    formatData(items){
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url)
            let rooms = {...item.fields, images, id}

            return rooms;
        });
        return tempItems
    }

    getRoom = (slug) => {
        let tempRoom = [...this.state.rooms];
        const room = tempRoom.find((room) => room.slug ===slug); //return one value only
        return room;
    }

    //This function is confused, learn more about it
    handleChange = event => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = event.target.name;
        this.setState({
            [name]:value
        }, this.filterRooms) // Asynchronous function so called only when the state is changed
    }

    filterRooms = () => {
        let {
            rooms, type, capacity, price, minSize, maxSize, breakfast, pets
        } = this.state
    //all the rooms
        let tempRooms = [...rooms]

    //transform value
        capacity = parseInt(capacity)

    //filter by type    
        if(type !== "all"){
            tempRooms = tempRooms.filter(room => room.type === type);
        }
        
    //filter by capacity
        if(capacity !== 1 ){
            tempRooms = tempRooms.filter(room => room.capacity >= capacity)
        }
    
    //filter by price
        tempRooms = tempRooms.filter(room => room.price <= price)
        
    //filter by size
        tempRooms = tempRooms.filter(room => room.size <= maxSize && room.size >= minSize)
    
    //filter by extras
        console.log(breakfast)
        if(breakfast){
            tempRooms = tempRooms.filter(room => room.breakfast === true)
        }

        if(pets){
            tempRooms = tempRooms.filter(room => room.pets === true)   
        }

        this.setState({
            sortedRooms: tempRooms
        })
    }

    render() {
        return (
            <RoomContext.Provider value={{...this.state, getRoom: this.getRoom, handleChange: this.handleChange}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export {RoomProvider, RoomConsumer, RoomContext};

export function withRoomConsumer(Component) {
    return function ConsumerWrapper(props) {
      return (
        <RoomConsumer>
          {value => <Component {...props} context={value} />}
        </RoomConsumer>
      );
    };
  }