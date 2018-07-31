import React, { Component } from 'react';
import {Link, browserHistory} from "react-router-dom"
import {Header, Container} from "semantic-ui-react";


export default class Radiator extends React.Component {
    constructor() {
        super();

       //api_url = 'http://samples.openweathermap.org/data/2.5/weather?appid=6384f6940e1b5dd2173efe3106363fa4&units=metric';


        this.state = {
            temp: []
        };


    }

    componentDidMount() {

        fetch('../src/data/weather.json')
            .then(results =>  {return results.json();
            // handle network error
        }).then(result => {
            console.log(result)
            this.setState({temp: result.main.temp});
            console.log(this.state.temp)
        }).catch(error => console.error('Error:', error))
    }
    render(){
        let{temp} = this.state
        return (
            <div>
                {temp}
            </div>
        )}
    }

