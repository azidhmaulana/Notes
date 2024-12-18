import React from "react";
import InputNotesLayouts from "./components/Layouts/InputNotesLayouts";
import NavBarLayout from "./components/Layouts/NavBarLayout";
import CardLayouts from "./components/Layouts/CardLayout";
import { getInitialData } from "./utils";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NotesData: getInitialData(),
      searchQuery: "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.toggleArchiveHandler = this.toggleArchiveHandler.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  onDeleteHandler(id) {
    const NotesData = this.state.NotesData.filter((note) => note.id !== id);
    this.setState({ NotesData });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        NotesData: [
          ...prevState.NotesData,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  handleSearchChange(event) {
    this.setState({ searchQuery: event.target.value });
  }

  toggleArchiveHandler(id) {
    this.setState((prevState) => {
      return {
        NotesData: prevState.NotesData.map((note) =>
          note.id === id ? { ...note, archived: !note.archived } : note
        ),
      };
    });
  }

  render() {
    const { NotesData, searchQuery } = this.state;

    const filteredNotes = searchQuery
      ? NotesData.filter((note) =>
          note.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : NotesData;

    return (
      <div className="2xl:container 2xl:mx-auto min-h-screen flex flex-col justify-center items-center">
        <div className="bg-white rounded shadow-lg px-3 mb-4 w-full">
          <NavBarLayout onChange={this.handleSearchChange} />
        </div>
        <div className="flex justify-center items-center py-6 w-full">
          <InputNotesLayouts addNote={this.onAddNoteHandler} />
        </div>

        <div className="w-full mx-auto py-6 ">
          <CardLayouts
            onDelete={this.onDeleteHandler}
            NotesData={filteredNotes}
            onToggleArchive={this.toggleArchiveHandler}
          />
        </div>
      </div>
    );
  }
}

export default App;
