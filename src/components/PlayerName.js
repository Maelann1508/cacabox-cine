import React, { useState } from "react";
import profil from "../assets/profil.svg";

const PlayerName = (props) => {
    const [name, setName]= useState("");
    return(  
        <div>
            <div className="rank-add-player-container">
                <div className="rank-input-new">
                    <input
                        className="rank-input-police-new"
                        type="text"
                        onClick=""
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                </div>
            </div>
            <div>
                <button 
                    className="rank-add-player-button"
                    type="button">

                </button>
            </div>
            <div className="rank-input-img-new">
                <img 
                    src={profil}
                />
            </div>
        </div>  


    );
}

export default PlayerName;