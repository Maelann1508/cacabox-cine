import React from "react";
import ActorGuess from "../components/ActorGuess";
import FilmEn4Mots from "../components/FilmEn4Mots";
import Mp3Guess from "../components/Mp3Guess";

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
          <div className="main-logo" />
          <div className="main-container">
            <div className="main-container-top">
              <ActorGuess />
              <FilmEn4Mots />
            </div>
            <div className="main-container-bot">
              <Mp3Guess />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
