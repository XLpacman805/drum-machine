import React from 'react';
import './DrumKitToggle.css'

class DrumKitToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.toggleDrumKit();
    }

    render() {
        return (
            <div>
                <div className="left-of-switch">Drum Kit A</div>
                <label className="switch">
                    <input type="checkbox"></input>
                    <span className="slider round" onClick={this.handleClick}></span>
                </label>
                <div className="right-of-switch">Drum Kit B</div>
            </div>
        )
    }
}

export default DrumKitToggle;