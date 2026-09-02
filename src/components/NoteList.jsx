import Note from "./Note";

const NoteList = ({ notes, onDeleteNote }) => {
  if (notes.length === 0) {
    return <p className="text-center text-gray-500">No Notes Yet</p>;
  }

  return (
    <div className="space-y-4">
      {notes.map((note) => {
        return <Note key={note.id} note={note} onDeleteNote={onDeleteNote} />;
      })}
    </div>
  );
};

export default NoteList;
