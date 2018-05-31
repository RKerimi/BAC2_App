import React, {Component} from "react";
import {Link} from 'react-router-dom'
import {Segment, Menu, Container, Grid, Header} from 'semantic-ui-react'
import ImgSmartHome from '../../img/imgSmartHome.jsx'




const navColor = {backgroundColor: 'green',
                    padding:'0.2em'};

const navColorBackground = {backgroundColor: '#FFF', marginTop:'0.1em'};

class Navigation extends Component {
    state = {}

    handleItemClick = (e, {to}) => this.setState({activeItem: to})



    render() {
        const { activeItem } = this.state

        return (
            <Container>
                <Segment style={navColorBackground}>
                    <Grid divided='vertically'>
                        <Grid.Row columns={1}>
                            <Grid.Column>

                                <Menu size='large' style={navColor}>
                                    <Menu.Item as={Link} to="/" active={activeItem === '/'} onClick={this.handleItemClick}>Home</Menu.Item>
                                    <Menu.Item as={Link} to="licht" active={activeItem === '/licht'} onClick={this.handleItemClick}>Licht</Menu.Item>
                                    <Menu.Item as={Link} to="heizung" active={activeItem === '/heizung'} onClick={this.handleItemClick}>Heizung</Menu.Item>
                                    <ImgSmartHome />
                                </Menu>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>


                </Segment>
            </Container>
        )
    }
}

export default Navigation