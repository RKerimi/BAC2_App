import React, { Component } from 'react'
import { Button, Grid } from 'semantic-ui-react'


    class ButtonExampleToggle extends Component {
        state = {}

        handleClick = () => this.setState({ active: !this.state.active })

        render() {
            const { active } = this.state

            return (
                <Grid columns='equal'>
                    <Grid.Row>
                        <Grid.Column>
                            <Button positive size='huge'>Öffnen</Button>
                        </Grid.Column>
                        <Grid.Column>
                        </Grid.Column>
                        <Grid.Column>
                            <Button onClick={this.handleClick} negative>Schliessen</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            )
        }
    }

export default ButtonExampleToggle