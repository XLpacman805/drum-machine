import React from 'react';
import Drumpad from './Drumpad'
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
                    <Drumpad className="grid-item-one" text="Q" />
                    <Drumpad className="grid-item-two" text="W"/>
                    <Drumpad className="grid-item-three" text="E" />

                    <Drumpad className="grid-item-four" text="A" />
                    <Drumpad className="grid-item-five" text="S" />
                    <Drumpad className="grid-item-six" text="D" />

                    <Drumpad className="grid-item-seven" text="Z" />
                    <Drumpad className="grid-item-eight" text="X" />
                    <Drumpad className="grid-item-nine" text="C" />
                </div>
            </div>
         );
    }
}

export default DrumMachine;