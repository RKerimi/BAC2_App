import React, {Component} from "react";
import {Link} from 'react-router-dom'
import {Container, Segment, Menu, Button, Label} from 'semantic-ui-react'
import GitlabButtonFramework from './gitlabButtonFramework'
import GitlabButtonFRAPPS from './gitlabButtonFRAPPS'

class Navigation extends Component {
    state = {}

    handleItemClick = (e, {to}) => this.setState({activeItem: to})

    render() {
        const { activeItem } = this.state

        return (
            <Container>
                <Segment>
                <Menu stackable pointing secondary size='large' style={{border: 'none'}}>
                    <Menu.Item as={Link} to="/" active={activeItem === '/'} onClick={this.handleItemClick}>Home</Menu.Item>

                    <Menu.Item position='right'><GitlabButtonFramework/> &nbsp; <GitlabButtonFRAPPS/></Menu.Item>
                </Menu>
                </Segment>
            </Container>
        )
    }
}

export default Navigation