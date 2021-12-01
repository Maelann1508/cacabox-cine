import React, { useState } from "react";
import Mot from "./Mot";
import edit from "../assets/edit.svg";
import undo from "../assets/undo.svg";
import forward from "../assets/forward.svg";
import reset from "../assets/reset.svg";

const FilmEn4Mots = () => {
  return (
    <div className="main-film-container">
      <span className="main-police-title ">FILM EN 4 MOTS</span>
      <div className="main-film-screen">
        <div className="main-film-screen-container">
          <Mot mot={"FILM"} />
          <Mot mot={"ELEPHANT"} />
          <Mot mot={"CROCODILE"} />
          <Mot mot={"OUI"} />
        </div>
      </div>
      <div className="main-film-settings">
        <div className="main-film-settings-container">
          <img
            src={edit}
            style={{ cursor: "pointer", marginLeft: "15px", marginTop: "3px" }}
          />
          <img src={undo} style={{ cursor: "pointer" }} />
          <img src={forward} style={{ cursor: "pointer" }} />
          <img src={reset} style={{ cursor: "pointer", marginRight: "15px" }} />
        </div>
      </div>
    </div>
  );
};

export default FilmEn4Mots;
