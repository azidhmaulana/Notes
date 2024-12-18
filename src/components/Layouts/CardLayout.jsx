import React from "react";
import CardContent from "../Fragments/CardContent";
import SubTitle from "../Elements/Card/Title";

function CardLayouts({ NotesData, onDelete, onToggleArchive }) {
  const activeNotes = NotesData.filter((note) => !note.archived);
  const archivedNotes = NotesData.filter((note) => note.archived);

  return (
    <>
      <SubTitle classname="text-2xl font-extrabold dark:text-white mb-4 text-center uppercase underline underline-offset-8 py-6">
        Catatan Aktif
      </SubTitle>
      <CardContent
        onDelete={onDelete}
        NotesData={NotesData}
        onToggleArchive={onToggleArchive}
        notesState={activeNotes}
      />

      <SubTitle classname="text-2xl font-extrabold dark:text-white mb-4 text-center uppercase underline underline-offset-8 py-6">
        Arsip
      </SubTitle>
      <CardContent
        onDelete={onDelete}
        NotesData={NotesData}
        onToggleArchive={onToggleArchive}
        notesState={archivedNotes}
      />
    </>
  );
}

export default CardLayouts;
