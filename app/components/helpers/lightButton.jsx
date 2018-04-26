import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

class LightButton extends Component {
    constructor(props) {
        super(props);
        this.state = {  active: false,
                        count:0,
                        date: new Date()
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
        var date = new Date();
        this.setState({date: date})
    }


    render() {
        const { active, count , date} = this.state;

        return (
            <div>
            <Button id="lightButton" toggle active={active}  onClick={this.handleClick}  >
                {this.state.active ? 'Licht AN' : 'Licht AUS'}

                {console.dir(active)}
                {console.log(count)}
                {console.log(date)}
            </Button><br/>
                {count}<br/>
                {date.toLocaleString()}
            </div>
                                )
    }
}

export default LightButton
