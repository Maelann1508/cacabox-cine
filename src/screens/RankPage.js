import React from "react";
import NewPlayer from "../components/NewPlayer.js";

import minia from "../assets/minia.png";


export default class TemperatureInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        user: [],
      };
    }

    render() {
        return (
            <div className="main-backgroundgrey">
                <div className="main-backgroundblue">
                    <div className="main-logo-container">
                        <img className="main-logo-style" src={minia} />
                    </div>
                    <div className="main-container">
                        <div className="main-container-top">
                        </div>
                        <div className="rank-container-center">
                            <NewPlayer />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
  }