import React from 'react';
import Drumpad from './Drumpad'
import './DrumMachine.css';
import EightZeroEightDrumKit from './drumkits/808 Extended/808ExtendedDrumKit';
import ElectroSoulDrumKit from './drumkits/Electro Soul Kit/ElectroSoulDrumKit';

class DrumMachine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeDrumKit: EightZeroEightDrumKit
        };
    }

    render() {
        return ( 
            <div id="drum-machine">
                <h2>Drumming Machine World</h2>
                <div className="grid-container">
                    <Drumpad className="grid-item-one" text="Q" audioPath={this.state.activeDrumKit[0]} />
                    <Drumpad className="grid-item-two" text="W" audioPath={this.state.activeDrumKit[1]} />
                    <Drumpad className="grid-item-three" text="E" audioPath={this.state.activeDrumKit[2]}/>

                    <Drumpad className="grid-item-four" text="A" audioPath={this.state.activeDrumKit[3]} />
                    <Drumpad className="grid-item-five" text="S" audioPath={this.state.activeDrumKit[4]} />
                    <Drumpad className="grid-item-six" text="D" audioPath={this.state.activeDrumKit[5]} />

                    <Drumpad className="grid-item-seven" text="Z" audioPath={this.state.activeDrumKit[6]} />
                    <Drumpad className="grid-item-eight" text="X" audioPath={this.state.activeDrumKit[7]} />
                    <Drumpad className="grid-item-nine" text="C" audioPath={this.state.activeDrumKit[8]} />
                </div>
            </div>
         );
    }
}

export default DrumMachine;