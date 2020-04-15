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
                    <button className="grid-item-one">Q</button>
                    <button className="grid-item-two">W</button>
                    <button className="grid-item-three">E</button>

                    <button className="grid-item-four">A</button>
                    <button className="grid-item-five">S</button>
                    <button className="grid-item-six">D</button>

                    <button className="grid-item-seven">Z</button>
                    <button className="grid-item-eight">X</button>
                    <button className="grid-item-nine">C</button>
                </div>
            </div>
         );
    }
}

export default DrumMachine;