import React, {Component} from 'react';
import {browserHistory} from 'react-router-dom'
import {Container, Link} from 'semantic-ui-react';


export default class Notification extends React.Component {
    constructor() {
        super();

        this.state = {
            header: [],
            text: []
        };
    }

    componentDidMount() {
        //toDO Authentication
        fetch('../src/data/notification.json', {
            method: 'get'
        }).then(res => {
            return res.json();
        }).then(res => {
            console.dir(res)
            this.setState({
                header: res.notification.header,
                text: res.notification.text
            });
            console.log(this.state.header + "header")
            console.log(this.state.text + "text")


        }).catch(error => console.error('Error:', error))
    }

    render() {
        let {header, text} = this.state

        return (
            <Container>
                <h1>{header}</h1>
                <p>{text}</p>
            </Container>


        )
    }
}