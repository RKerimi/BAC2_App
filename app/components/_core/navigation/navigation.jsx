import React, {Component} from "react";
import {Link} from 'react-router-dom'
import {Segment, Menu, Container} from 'semantic-ui-react'




const navColor = {backgroundColor: 'green',
                    padding:'0.2em'};

const navColorBackground = {backgroundColor: '#FFF'};

class Navigation extends Component {
    state = {}

    handleItemClick = (e, {to}) => this.setState({activeItem: to})



    render() {
        const { activeItem } = this.state

        return (
            <Container>
                <Segment style={navColorBackground}>
                    <Menu size='large' style={navColor}>
                        <Menu.Item as={Link} to="/" active={activeItem === '/'} onClick={this.handleItemClick}>Home</Menu.Item>
                        <Menu.Item as={Link} to="licht" active={activeItem === '/licht'} onClick={this.handleItemClick}>Licht</Menu.Item>
                        <Menu.Item as={Link} to="heizung" active={activeItem === '/heizung'} onClick={this.handleItemClick}>Heizung</Menu.Item>
                    </Menu>
                </Segment>
            </Container>
        )
    }
}

export default Navigation