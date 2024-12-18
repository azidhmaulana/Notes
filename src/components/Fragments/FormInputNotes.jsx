import React from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import TextAreaForm from "../Elements/TextArea";

class FormInputNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitFormEventHandler = this.onSubmitFormEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const newTitle = event.target.value;
    const maxTitleLength = 50;

    if (newTitle.length <= maxTitleLength) {
      this.setState(() => {
        return {
          title: event.target.value,
        };
      });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitFormEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState({ title: "", body: "" });
  }

  render() {
    const maxTitleLength = 50;
    const remainingTitleLength = maxTitleLength - this.state.title.length;

    return (
      <>
        <p className="font-sm text-slate-500 mb-4 text-right">
          Sisa Karakter:{" "}
          <span className="font-bold">{remainingTitleLength}</span>
        </p>
        <form onSubmit={this.onSubmitFormEventHandler}>
          <InputForm
            id="title"
            type="text"
            placeholder="Tulis judul catatanmu ..."
            classname="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:text-slate-400"
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          />
          <TextAreaForm
            placeholder="Tulis isi catatanmu ..."
            classname="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300"
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
          />
          <Button
            classname="w-full h-10 px-6 font-semibold rounded-md bg-sky-500 text-white"
            type="submit"
          >
            Simpan
          </Button>
        </form>
      </>
    );
  }
}

export default FormInputNotes;
