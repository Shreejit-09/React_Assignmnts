import React from "react";
import {notes} from "../notes"

function Firstnote(prop){
return <div className="note">
    <h1>{prop.title}</h1>
    <p>{prop.content}</p>
    </div>;
}

function Createnote(note){
return <Firstnote
        key={note.key}
        title={note.title}
        content={note.content}
/>  ;
}

function Note(){
    return <div >
        {notes.map(Createnote)};
    </div>;
}

export default Note; 