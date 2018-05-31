import React, { Component } from 'react';
import reqwest from 'reqwest'
import {Link, browserHistory} from "react-router-dom"
import {Header, Container} from "semantic-ui-react";


function Display(props) {
    return (
        <Container>
            <Header as="h5">Hallo</Header>
            <text></text>

        </Container>
    )
}




export default class Radiator extends React.Component {
    api_url='http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22';

    constructor(){
        super();

        this.state={
        temp:[]
    }

        //api_url = 'http://samples.openweathermap.org/data/2.5/weather?appid=bb7a1436b1382913ef22ac44008c8a76&units=metric';

            reqwest({

                url:`${this.api_url}`,
                method: 'get',
                crossOrigin: true,
                headers: {
                    'Authorization': 'Basic '
                },
                success: (resp) => {
                    this.setState({temp: resp, loading: false})
                },
                error: (error) => {
                    //this.setState(errorResponseAjax(error), {loading: false})
                }
            })
        }

    render()
        {
        return <Display temp={this.state.temp}/>;

        }
}

