import { useState } from "react";
export default function Player(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerNameUpdate, setplayerNameUpdate] = useState(props.playerName);

  function buttonClick() {
    setIsEditing((editing) => !editing); // function form of state updating
    {
      /* setIsEditing(!isEditing) this is also fine but react schedual the stats but not change it instantly
         while using setIsEditing((editing)=>!editing); react instantly change the state instead of schedualing.
        let say if we run two state update functions what will happend

        setIsEditing(!isEditing); schedules a state update to true
        setIsEditing(!isEditing); schedules a state update to true but expected false. because this function also take first 
        state value not after stateupdate in just before line

        setIsEditing((editing) => !editing);
        setIsEditing((editing) => !editing);

        but these couple of line will behae as expected nothing will happend */
    }
  }
  function playerNameEdit(event) {
    setplayerNameUpdate(event.target.value);
  }

  let playerName = <span className="player-name"> {playerNameUpdate}</span>;
  if (isEditing) {
    playerName = (
      <input
        type="text"
        required
        value={playerNameUpdate}
        onChange={playerNameEdit}
      />
    );
    // by onchange we take the change value in input and with the help of playerNameEdit fuction we feed that back to value of
    // same input field, value={playerNameUpdate}. this is called two way binding. getting value and feeding same value to input
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{props.playerSymbol}</span>
        <button onClick={buttonClick}>{isEditing ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}
