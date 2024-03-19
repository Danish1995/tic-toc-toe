import { useState } from "react";
import { buttonClick ,playerNameEdit } from "./functions";

export default function Player({ playerName, playerSymbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
    const [playerNameUpdate, setplayerNameUpdate] = useState(playerName);

  let editablePlayerName = (
    <span className="player-name"> {playerNameUpdate}</span>
  );
  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        value={playerNameUpdate}
        onChange={(e)=> playerNameEdit(e,setplayerNameUpdate)}
      />
    );
    // by onchange we take the change value in input and with the help of playerNameEdit fuction we feed that back to value of
    // same input field, value={playerNameUpdate}. this is called two way binding. getting value and feeding same value to input
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{playerSymbol}</span>
        <button onClick={()=>buttonClick(setIsEditing)}>{isEditing ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}
