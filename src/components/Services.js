import React, { Component } from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";
import Title from './Title';

export default class Services extends Component {

    state = {
        services:[
            {
                icon:<FaCocktail/>,
                title:"Free Cocktails",
                info: "Incididunt quis labore anim cillum."
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info: "In cillum deserunt sint officia nisi consectetur."
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free Shuttle",
                info: "Qui velit incididunt duis sunt officia cillum nisi nostrud laborum ipsum occaecat in sunt."
            },
            {
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info: "Cillum ad cupidatat est deserunt adipisicing."
            },
        ]
    }

    render() {
        return (
            <section className="services">
                <Title title="Service"/>
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index}  className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        )
    }
}
