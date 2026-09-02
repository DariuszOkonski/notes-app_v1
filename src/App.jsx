import { useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([
    // {
    //   id: 1788236021561,
    //   title: "aaa",
    //   priority: "High",
    //   category: "Work",
    //   description: "aaab",
    // },
    // {
    //   id: 1788236029352,
    //   title: "bbbb",
    //   category: "Work",
    //   priority: "Medium",
    //   description: "bbbad",
    // },
    // {
    //   id: 1788236710593,
    //   title: "safdasdf",
    //   priority: "Low",
    //   category: "Ideas",
    //   description: "asdfasdfasfd",
    // },
    // {
    //   id: 1788236714980,
    //   title: "asdfasdf",
    //   category: "Work",
    //   priority: "Medium",
    //   description: "asdfafsdasdfasf",
    // },
    // {
    //   id: 1788236717988,
    //   title: "asdfasfdasfdasfd",
    //   category: "Work",
    //   priority: "Medium",
    //   description: "asdfasfaf",
    // },
    // {
    //   id: 1788236720696,
    //   title: "asdfasfasfd",
    //   category: "Work",
    //   priority: "Medium",
    //   description: "asdfasfdasdf",
    // },
  ]);

  const deleteNote = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this note?",
    );

    if (confirmDelete) {
      setNotes(notes.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Notes App</h2>

      <NoteForm notes={notes} setNotes={setNotes} />
      <NoteList notes={notes} onDeleteNote={deleteNote} />
    </div>
  );
}

export default App;
