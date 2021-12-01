import React, { useState } from "react";
import Mot from "./Mot";
import edit from "../assets/edit.svg";
import undo from "../assets/undo.svg";
import forward from "../assets/forward.svg";
import resetIcon from "../assets/reset.svg";

const FilmEn4Mots = () => {
  const [isEdited, setEdited] = useState(false);
  const [show, setShow] = useState(1);
  const cptWord = ["", "", "", ""];

  const listWord = cptWord.map((el, id) => (
    <Mot key={id} id={id} isEdited={isEdited} show={show} />
  ));

  function upgradeShow() {
    show > 3 ? null : setShow(show + 1);
  }
  function downShow() {
    show == 1 ? null : setShow(show - 1);
  }

  return (
    <div className="main-film-container">
      <span className="main-police-title ">FILM EN 4 MOTS</span>
      <div className="main-film-screen">
        <div className="main-film-screen-container">{listWord}</div>
      </div>
      <div className="main-film-settings">
        <div className="main-film-settings-container">
          <img
            src={edit}
            onClick={() => setEdited(!isEdited)}
            style={{ cursor: "pointer", marginLeft: "15px", marginTop: "3px" }}
          />
          <img
            src={undo}
            style={{ cursor: "pointer" }}
            onClick={() => downShow()}
          />
          <img
            src={forward}
            style={{ cursor: "pointer", marginRight: "15px" }}
            onClick={() => upgradeShow()}
          />
        </div>
      </div>
    </div>
  );
};

export default FilmEn4Mots;
