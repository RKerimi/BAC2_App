import React, { Component } from 'react';
import reqwest from 'reqwest'
import {Link, browserHistory} from "react-router-dom"
import {Header, Container} from "semantic-ui-react";



export default class Radiator extends React.Component {
    constructor() {
        super();

       //api_url = 'http://samples.openweathermap.org/data/2.5/weather?appid=bb7a1436b1382913ef22ac44008c8a76&units=metric';


        this.state = {
            pictures: []
        };


    }

    componentDidMount() {
        fetch('https://randomuser.me/api/')
            .then(results =>  {return results.json();
            // handle network error
        }).then(data => {
            let pictures = data.results.map((pic) => {
                return(
                    <div key={pic.results}>
                        <img src={pic.picture.medium} />
                    </div>)
            })

                this.setState({pictures: pictures});
                console.log('state', this.state.pictures)
        })

    }




    render(){
        return (
            <div>
                {this.state.pictures}
            </div>
        )}
    }

