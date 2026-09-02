const NoteList = ({ notes, onDeleteNote }) => {
  if (notes.length === 0) {
    return <p className="text-center text-gray-500">No Notes Yet</p>;
  }

  const handleDeleteNote = (id) => {
    onDeleteNote(id);
  };

  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <div
          key={note.id}
          className="p-4 bg-white rounded-lg shadow-md bg-white border-l-4"
        >
          <h3 className="text-lg font-bold">{note.title}</h3>
          <p className="text-sm text-gray-600">
            <strong>Category: </strong>
            {note.category}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Priority: </strong>
            {note.description}
          </p>

          <button
            onClick={() => handleDeleteNote(note.id)}
            className="mt-3 text-red-500 cursor-pointer transition hover:text-red-700"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
