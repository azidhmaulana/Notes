import SubTitle from "./Title";
import FormatedDate from "./Date";
import Content from "./Content";
import Button from "../Button";
import React from "react";

function CardForm({
  title,
  createdAt,
  body,
  id,
  onDelete,
  onToggleArchive,
  archived,
}) {
  return (
    <div className="block max-w-xs h-[400px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex flex-col justify-between">
      <div className="flex flex-col flex-grow overflow-y-auto">
        <div className="flex flex-col min-h-[50px]">
          <SubTitle classname="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
            {title}
          </SubTitle>
        </div>
        <FormatedDate createdAt={createdAt} />
        <Content body={body} />
      </div>

      <div className="flex pt-4 mx-auto space-x-2">
        <Button
          classname={`w-full text-white ${
            archived
              ? "bg-yellow-500 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300"
              : "bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300"
          }  font-medium rounded-lg text-sm sm:text-base px-4 sm:px-5 py-2.5 sm:py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
          type="submit"
          onClick={() => onToggleArchive(id)}
        >
          {archived ? "Pindahkan " : "Arsipkan"}
        </Button>
        <Button
          classname="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm sm:text-base px-4 sm:px-5 py-2.5 sm:py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => onDelete(id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default CardForm;
