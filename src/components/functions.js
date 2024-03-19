export function buttonClick(setIsEditing) {
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
  export const playerNameEdit = (event, setplayerNameUpdate) => setplayerNameUpdate(event.target.value)