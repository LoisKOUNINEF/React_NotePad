function Sidebar({notes, onAddNote}) {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Notes</h1>
        <button onClick={onAddNote}>Add</button>
      </div>
      <div className="app-sidebar-notes">
      {notes.map((note) => (
        <div className="app-sidebar-note">
          <div className="app-sidebar-note-title">
            <strong>Title</strong>
            <button>Delete</button>
          </div>
          <p>Preview</p>
          <small className="note-meta">Last modified [date]</small>
        </div>
        ))}
      </div>
    </div>
    );
}

export default Sidebar;
