import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

class LightButton extends Component {
    constructor(props) {
        super(props);
        this.state = {  active: false,
                        count: 0,
                        time: new Date()
                    };

        this.handleClick = this.handleClick.bind(this);
    }
    count() {
        this.setState({
            count: this.state.count + 1
        });
    }


    handleClick(e) {
        this.updateTimes();
        this.setState(getOn => ({active: !getOn.active}));
        if(this.state.active==false){
        this.count(e);
        }


    }
    updateTimes(){
        var time = new Date();

        this.setState({time: time})
    }


    render() {
        const { active, count , time} = this.state;

        return (
            <div>
            <Button id="lightButton" toggle active={active}  onClick={this.handleClick}  >
                {this.state.active ? 'Licht AN' : 'Licht AUS'}
                {console.dir(active)}
                {console.log(count)}
                {console.log(time)}
            </Button><br/>
                {count}<br/>
                {time.toLocaleString()}
            </div>
                                )
    }
}

export default LightButton
