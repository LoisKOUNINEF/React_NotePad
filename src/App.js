import {useState} from 'react';
import uuid from 'react-uuid';
import './App.css';
import Main from './Main.js';
import Sidebar from './Sidebar.js';

function App() {

  const [notes, setNotes] = useState([]);
  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled",
      body: "",
      lastModified: Date.now(),
    };
    setNotes([newNote, ...notes]);
  };

  return (
  <div className="App">
    <Sidebar notes={notes} onAddNote={onAddNote} />
    <Main />
  </div>
  );
}

export default App;
