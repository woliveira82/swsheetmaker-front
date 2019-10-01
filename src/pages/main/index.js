import React, {Component} from "react";

import "./styles.css";

export default class Main extends Component {
    render () {
        return (
            <div className="config">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 center-block">
                        <form className="form-signin">
                            <div className="form-label-group">
                                <div className="row">
                                    <div className="col text-center">
                                        <img id="SWLogo" src="/img/SW_LOGO_24bit.png" alt="Savage Worlds Logo"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col text-center">
                                        Scenario
                                        <select name="scenario" className="form-control">
                                            <option value="" disabled selected>Choose a scenario...</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col text-center">
                                        Character
                                        <select name="character" className="form-control">
                                            <option value="" disabled selected>Choose a character...</option>
                                            <option value="newchar">Create a new character</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col text-center">
                                        <button className="btn btn-lg btn-primary btn-block" type="submit">Play</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col text-center">
                                        <button className="btn btn-lg btn-secondary btn-block" type="submit">Configuration</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}