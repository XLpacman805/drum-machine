import React from 'react';
import './DrumKitToggle.css'

class DrumKitToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div class="left-of-switch">Drum Kit A</div>
                <label class="switch">
                    <input type="checkbox"></input>
                    <span class="slider round"></span>
                </label>
                <div class="right-of-switch">Drum Kit B</div>
            </div>
        )
    }
}

export default DrumKitToggle;