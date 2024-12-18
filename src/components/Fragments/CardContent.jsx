import React from "react";
import CardForm from "../Elements/Card";

function CardContents({ onDelete, onToggleArchive, archived, notesState }) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {notesState.length > 0 ? (
        notesState.map((note) => (
          <CardForm
            key={note.id}
            id={note.id}
            onDelete={onDelete}
            onToggleArchive={onToggleArchive}
            {...note}
          />
        ))
      ) : (
        <p className="text-center">Tidak ada catatan</p>
      )}
    </div>
  );
}

export default CardContents;
