import React,{useState} from "react";

import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes ] = useState([]);

  function addNote(note){
    setNotes((prevVal=>{
      return [...prevVal, note];
    }));
  }

  function deleteNote(id){
    setNotes(prevVal=>{
      return notes.filter((val,index)=>{
        return index!==id;
      });
    });
  }

  return (
    <div>
   
      <CreateArea onAdd={addNote}/>
      {notes.map((val,index)=>{
        return <Note key={index} onChecked={deleteNote} id={index} title={val.title} content={val.content} />;
      })}
      
    </div>
  );
}

export default App;