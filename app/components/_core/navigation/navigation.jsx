import React, {Component} from "react";
import {Link} from 'react-router-dom'
import {Menu, Container, Grid, Icon} from 'semantic-ui-react'


const navColor = {backgroundColor: 'green',
    padding:'0.2em', margin:'0.2em'};


class Navigation extends Component {
    state = {}

    handleItemClick = (e, {to}) => this.setState({activeItem: to})



    render() {
        const { activeItem } = this.state

        return (<Container>
                    <Grid divided='vertically'>
                        <Grid.Row columns={1}>
                            <Grid.Column>
                                <Menu size='large' style={navColor}>
                                    <Menu.Item as={Link} to="/" active={activeItem === '/'} onClick={this.handleItemClick}>Home</Menu.Item>
                                    <Menu.Item as={Link} to="licht" active={activeItem === '/licht'} onClick={this.handleItemClick}>Licht</Menu.Item>
                                    <Menu.Item as={Link} to="heizung" active={activeItem === '/heizung'} onClick={this.handleItemClick}>Heizung</Menu.Item>
                                    <Menu.Item as={Link} to="garage" active={activeItem === '/garage'} onClick={this.handleItemClick}>Garage</Menu.Item>

                                <Menu.Menu position='right'>
                                    <Menu.Item><Icon name='setting'/></Menu.Item>
                                    <Menu.Item
                                        as={Link} to="/"
                                        name='logout'
                                        active={activeItem === 'logout'}
                                        onClick={this.handleItemClick}
                                    />
                                </Menu.Menu>
                                </Menu>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
        </Container>
        )
    }
}

export default Navigation
