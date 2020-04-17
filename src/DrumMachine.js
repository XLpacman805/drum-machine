import React from 'react';
import Drumpad from './Drumpad'
import './DrumMachine.css';
import EightZeroEightDrumKit from './drumkits/808 Extended/808ExtendedDrumKit';
import ElectroSoulDrumKit from './drumkits/Electro Soul Kit/ElectroSoulDrumKit';

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
                    <Drumpad className="grid-item-one" text="Q" audioPath={ElectroSoulDrumKit[0]} />
                    <Drumpad className="grid-item-two" text="W" audioPath={ElectroSoulDrumKit[1]} />
                    <Drumpad className="grid-item-three" text="E" audioPath={ElectroSoulDrumKit[2]}/>

                    <Drumpad className="grid-item-four" text="A" audioPath={ElectroSoulDrumKit[3]} />
                    <Drumpad className="grid-item-five" text="S" audioPath={ElectroSoulDrumKit[4]} />
                    <Drumpad className="grid-item-six" text="D" audioPath={ElectroSoulDrumKit[5]} />

                    <Drumpad className="grid-item-seven" text="Z" audioPath={ElectroSoulDrumKit[6]} />
                    <Drumpad className="grid-item-eight" text="X" audioPath={ElectroSoulDrumKit[7]} />
                    <Drumpad className="grid-item-nine" text="C" audioPath={ElectroSoulDrumKit[8]} />
                </div>
            </div>
         );
    }
}

export default DrumMachine;