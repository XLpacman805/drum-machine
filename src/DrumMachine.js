import React from 'react';
import Drumpad from './Drumpad';
import DrumKitToggle from './DrumKitToggle';
import './DrumMachine.css';
import EightZeroEightDrumKit from './drumkits/808 Extended/808ExtendedDrumKit';
import ElectroSoulDrumKit from './drumkits/Electro Soul Kit/ElectroSoulDrumKit';

class DrumMachine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeDrumKit: EightZeroEightDrumKit
        };
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.toggleDrumKit = this.toggleDrumKit.bind(this);
    }

    handleKeyDown(event) {
        /**
         * Responsible for determing if the string passed is a valid key. 
         * @param {String} eventKey - the key pressed on the user's keyboard. 
         * @returns {Boolean}
         */
        function isValidKey(eventKey) {
            switch (eventKey) {
                case("q"):
                    return true;
                case("Q"):
                    return true;    
                case("w"):
                    return true;
                case("W"):
                    return true;
                case ("e"):
                    return true;
                case("E"):
                    return true;
                case("a"):
                    return true;
                case("A"):
                    return true;
                case("s"):
                    return true;
                case("S"):
                    return true;
                case("d"):
                    return true;
                case("D"):
                    return true
                case("z"):
                    return true;
                case("Z"):
                    return true;
                case("x"):
                    return true;
                case("X"):
                    return true;
                case("c"):
                    return true;
                case("C"):
                    return true;
                default:
                    return false;  
            }
        }

        if (isValidKey(event.key)) {
            let drumpadButton = document.getElementById(event.key.toLowerCase());
            drumpadButton.click();
            drumpadButton.focus();
        }
    }

    toggleDrumKit() {
        let activeDrumKit = this.state.activeDrumKit;

        if (activeDrumKit === EightZeroEightDrumKit) {
            this.setState({activeDrumKit: ElectroSoulDrumKit});
        } else {
            this.setState({activeDrumKit: EightZeroEightDrumKit});
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);

    }

    componentWillUnmount() {
        document.removeEventListener('keydown');
    }

    render() {
        return ( 
            <div id="drum-machine">
                <h1>React Drum Machine</h1>
                <h2>Use your keyboard or click on a drum pad to play a sound.</h2>
                <h3>You can toggle between two drumkits by clicking the switch below</h3>
                <DrumKitToggle toggleDrumKit={this.toggleDrumKit} />
                <div className="grid-container">
                    <Drumpad className="drumpad-style grid-item-one" text="q" audioPath={this.state.activeDrumKit[0]} />
                    <Drumpad className="drumpad-style grid-item-two" text="w" audioPath={this.state.activeDrumKit[1]} />
                    <Drumpad className="drumpad-style grid-item-three" text="e" audioPath={this.state.activeDrumKit[2]}/>

                    <Drumpad className="drumpad-style grid-item-four" text="a" audioPath={this.state.activeDrumKit[3]} />
                    <Drumpad className="drumpad-style grid-item-five" text="s" audioPath={this.state.activeDrumKit[4]} />
                    <Drumpad className="drumpad-style grid-item-six" text="d" audioPath={this.state.activeDrumKit[5]} />

                    <Drumpad className="drumpad-style grid-item-seven" text="z" audioPath={this.state.activeDrumKit[6]} />
                    <Drumpad className="drumpad-style grid-item-eight" text="x" audioPath={this.state.activeDrumKit[7]} />
                    <Drumpad className="drumpad-style grid-item-nine" text="c" audioPath={this.state.activeDrumKit[8]} />
                </div>
            </div>
         );
    }
}

export default DrumMachine;