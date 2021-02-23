import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faMapMarker, faEnvelope } from '@fortawesome/free-solid-svg-icons'


import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import About from './pages/About'

import {Route, Switch} from 'react-router-dom';

import Navbar  from './components/Navbar';
import Footer from './components/Footer';

import {MapProvider, MapConsumer} from './MapContext'
import Modal from './components/Modal';
import Chatbot from './components/Chatbot'


library.add(fab, faPhone, faEnvelope, faMapMarker)


function App() {
    
  return (
    <>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home}/> 
            <Route exact path="/rooms/" component={Rooms}/> 
            <Route exact path="/rooms/:slug" component={SingleRoom}/>
            <Route exact path="/about/" component={About}/>
            <Route component={Error} />
        </Switch>
        <Chatbot/>
        <MapProvider>
            <Footer/>
            <MapConsumer>
                {(value) => {
                    const {selected} = value;
                    if(selected)
                    return (
                        <Modal/>
                    )
                }}
            </MapConsumer>
        </MapProvider>
    </>
  );
}

export default App;
