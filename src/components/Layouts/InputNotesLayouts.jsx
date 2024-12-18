import FormInputNotes from "../Fragments/FormInputNotes";
import Title from "../Elements/Title";

function InputNotesLayouts({ addNote }) {
  return (
    <div className="w-full max-w-xl p-6">
      <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 ">
        <Title classname="text-3xl font-bold mb-2">Buat Catatan</Title>

        <FormInputNotes addNote={addNote} />
      </div>
    </div>
  );
}

export default InputNotesLayouts;
