import { Space } from "antd";
import "./App.css";

import AppFooter from "./Components/AppFooter";
import AppHeader from "./Components/AppHeader";
import PageContent from "./Components/PageContent";
import SideMenu from "./Components/SideMenu";
import CreateArea from "./Pages/todolist/CreateArea";
import { Note } from "@mui/icons-material";
import React, { useState } from "react"



function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </div>
      <AppFooter />
    </div>
  );
 
  function App() {
    const [notes, setNotes] = useState([]);
  
    function addNote(newNote) {
      setNotes((prevNotes) => {
        return [...prevNotes, newNote];
      });
    }
  
    function deleteNote(id) {
      setNotes((prevNotes) => {
        return prevNotes.filter((noteItem, index) => {
          return index !== id;
        });
      });
    }
  
    return (
      <div>
        
        <CreateArea onAdd={addNote} />
        {notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
          <AppFooter />
      </div>
    );
  }
  
  
}


export default App;
