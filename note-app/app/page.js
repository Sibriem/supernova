"use client"

import Image from 'next/image'
import styles from './page.module.css'
import {useState, useEffect} from 'react'; 


export default function Home() {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')));
  
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);


  const handleAddNote = (event) => {
    event.preventDefault();
  
    const newNote = {
      id: Date.now(),
      title: title,
      content: content
    };

    setNotes([...notes, newNote]);
  
    setTitle('');
    setContent('');
  };

  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <main>
     <div className="app-container">
      <form className="note-form" onSubmit={handleAddNote}>
        <input value={title}
               onChange={(event) => setTitle(event.target.value)}
               placeholder="Title" 
               required/>
        <textarea value={content}
          onChange={(event) => setContent(event.target.value)} 
          placeholder="Content" 
          rows={10} 
          required />
        <button type="submit">Add Note</button>
      </form>
      <div className="notes-grid">
      {notes.map((note) => (
        <div className="note-item" key={note.id}>
          <div className="notes-header">
          <button>o</button>
          <button onClick={() => handleDeleteNote(note.id)}>x</button>  
          </div>
          <h2>{note.title}</h2>
          <textarea readOnly>{note.content}</textarea>
        </div>
         ))}
      </div>
     </div>
    </main>
  )
}
