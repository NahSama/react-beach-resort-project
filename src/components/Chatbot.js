import React, { Component, useContext } from 'react'
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot'
import botAvatar from '../images/Chatbot/botAva.png'
import RoomList from './RoomList';
import {RoomContext} from '../Context'
import { FaRegPaperPlane } from 'react-icons/fa';
import ChatbotRoomlist from './ChatbotRoomList';

const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#5F9EA0',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#5F9EA0',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };


class Chatbot extends Component {
    state = {
        opened: false,
        sortedRoom: null,
    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.sortedRoom !== this.context.sortedRooms){
            this.setState({
                sortedRoom: this.context.sortedRooms
            })
        }
    }
    
    toggleFloating = ({ opened }) => {
        this.setState({ opened }); 
    }
   
    render(){
        
        const  steps = [
            {
              id: '1',
              message: 'Which room do you concern?',
              trigger: '2',
            },
            {
              id: '2',
              component: <ChatbotRoomlist rooms={this.state.sortedRoom}/>,
              trigger: '4'
            },
            {
              id: '4',
              message: 'Please take a look',
              end: true,
            },
          ]

        return (
            <>  
                {console.log(this.state.sortedRoom)}
                {
                this.state.sortedRoom &&
                <ThemeProvider theme={theme}>
                    <ChatBot
                    headerTitle={'Wonderful Resort'}
                    botAvatar={botAvatar}
                    steps={steps}
                    toggleFloating={this.toggleFloating}
                    opened = {this.state.opened}
                    floating={true}
                    />
                </ThemeProvider>
                }
            </>
        )
    }
    
}
Chatbot.contextType = RoomContext

export default Chatbot

