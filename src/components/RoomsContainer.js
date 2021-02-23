import React from "react";
import { withRoomConsumer } from "../Context";
import Loading from "./Loading";
import RoomsFilter from "./RoomFilter";
import RoomsList from "./RoomList";


//Because Functional Component cannot use context if it's not under ContextConsumer
function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomContainer);


// import React from 'react'
// import RoomFilter from './RoomFilter'
// import RoomList from './RoomList'
// import {RoomConsumer} from '../Context'
// import Loading from './Loading'

// export default function Roomscontainer() {
//     return (
//         <RoomConsumer>
//             {(value) => {
//                 const {loading, sortedRooms, rooms} = value;
//                 if (loading) {
//                     return <Loading />;
//                 } 
//                 return(
//                 <>
//                     Hello from RoomsContainer
//                     <RoomFilter rooms={rooms} />
//                     <RoomList rooms={sortedRooms}/>
//                 </>
//                 )
//             }}
//         </RoomConsumer>
        
//     )
// }
