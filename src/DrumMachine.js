import React from 'react';
import './DrumMachine.css';

class DrumMachine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return ( 
            <div id="drum-machine">
                <h2>Drumming Machine World</h2>
                <div className="grid-container">
                    <div className="grid-item-one">Q</div>
                    <div className="grid-item-two">W</div>
                    <div className="grid-item-three">E</div>

                    <div className="grid-item-four">A</div>
                    <div className="grid-item-five">S</div>
                    <div className="grid-item-six">D</div>

                    <div className="grid-item-seven">Z</div>
                    <div className="grid-item-eight">X</div>
                    <div className="grid-item-nine">C</div>
                </div>
            </div>
         );
    }
}

export default DrumMachine;