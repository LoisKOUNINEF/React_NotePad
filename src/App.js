import {useState} from 'react';
import './App.css';
import Main from './Main.js'
import Sidebar from './Sidebar.js'

function App() {

  const [notes, setNotes] = useState([]);
  const onAddNote = () => {
    const newNote = {
      id:
      title:
      body:
      lastModified:
    }
  };

  return (
  <div className="App">
    <Sidebar notes={notes} onAddNote={onAddNote} />
    <Main />
  </div>
  );
}

export default App;
