import React, {Component} from 'react'
import {Button, Grid} from 'semantic-ui-react'


class ButtonSetTemp extends Component {
    constructor() {
        super();
        this.state = {temp: ''}
    }
    handleChange(e) {
        this.setState({temp: e.target.value});
    }
    render() {
        const temp = this.props.temp;

        return (
            <Button.Group size='huge'>
                <Button>-</Button>
                <Button.Or />
                <Button  onClick={this.handleChange} positive>+</Button>
            </Button.Group>
        )
    }
}


export default ButtonSetTemp