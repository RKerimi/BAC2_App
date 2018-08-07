import React, { Component } from 'react'
import { Button, Grid } from 'semantic-ui-react'


class BtnPushNotification extends Component {
    state = {}


    handleClick = (status) => {
        Notification.requestPermission();
        console.log('Notification permission status:', status);

    }

    render() {

        return (
            <Grid columns='equal'>
                <Grid.Row>
                    <Grid.Column>
                        <Button onClick={this.handleClick} color='blue' className="">Subscribe</Button>
                    </Grid.Column>
                    <Grid.Column>
                    </Grid.Column>
                    <Grid.Column>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default BtnPushNotification
