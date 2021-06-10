import React, { useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import CreateArea from "./CreateArea";

function App() {

  const [notes, setnotes]=useState([]);

  function addNote(newnote){
    setnotes(prenotes =>{
    return  [...prenotes,newnote]

    })
  }

  function deleteNote(id){
    setnotes(preNotes=>{
     return preNotes.filter((noteItem,index)=>{
        return index !== id;
      })
    })

  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
     {notes.map((noteItem,index) => {
        return (<Note 
        key={index}
        id={index}
       title={noteItem.title}
       content={noteItem.content}
       onDelete={deleteNote} />)
     })}
      <Footer />
    </div>
  );
}

export default App;