const Note = ({ note, onDeleteNote }) => {
  const borderLeftColor =
    note.priority === "High"
      ? "red"
      : note.priority === "Medium"
        ? "orange"
        : "green";
  return (
    <div
      key={note.id}
      className="p-4 rounded-lg shadow-md bg-white border-l-4"
      style={{ borderLeftColor }}
    >
      <h3 className="text-lg font-bold">{note.title}</h3>
      <p className="text-sm text-gray-600">
        <strong>Category: </strong>
        {note.category}
      </p>
      <p className="text-sm text-gray-600">
        <strong>Priority: </strong>
        {note.priority}
      </p>
      <p className="text-sm text-gray-600">
        <strong>Description: </strong>
        {note.description}
      </p>

      <button
        onClick={() => onDeleteNote(note.id)}
        className="mt-3 text-red-500 cursor-pointer transition hover:text-red-700"
      >
        Delete
      </button>
    </div>
  );
};

export default Note;
