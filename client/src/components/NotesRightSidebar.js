import { useRef } from "react";
import { notes } from "../utils/notes";

export default function NotesRightSidebar({
  noteSidebar,
  setNoteSidebar,
  setNote,
  setAddNew,
  note,
  addNew,
}) {
  const titleRef = useRef();
  const contentRef = useRef();
  const fontSizeRef = useRef();
  const fontWeightRef = useRef();
  const colorRef = useRef();

  const contentLength = contentRef.current?.value.length || 0;
  const existingContentLength = note?.content?.length || 0;

  const noteData = {
    title: titleRef.current?.value,
    content: {
      value: contentRef.current?.value,
      fontSize: fontSizeRef.current?.value,
      fontWeight: fontWeightRef.current?.value,
      color: colorRef.current?.value,
    },
  };

  return (
    <div
      className={`bg-dark-900 h-screen transition ease-in-out duration-100 ring-1 ring-dark-600 overflow-scroll pb-10 ${
        noteSidebar ? "col-span-2 opacity-100" : "opacity-0"
      }`}
    >
      <button
        onClick={() => {
          setAddNew(true);
          setNote(false);
        }}
        className="p-2 rounded-sm bg-dark-900 text-dark-300 hover:bg-dark-700 transition ease-in-out duration-150"
      >
        Add new +
      </button>
      {note && (
        <>
          <div className="p-2 grid grid-row-3 gap-1">
            <label className="font-bold text-dark-200">Title: </label>
            <input
              type="text"
              className="p-2 rounded-sm bg-dark-800 text-dark-100 text-sm focus:outline-none focus:ring-1 focus:ring-dark-300"
              value={note.title}
            />
            <label className="font-bold text-dark-200 word-wrap">
              Content:{" "}
            </label>
            <textarea
              style={{ color: note.content.color }}
              rows="14"
              className={`p-2 rounded-sm bg-dark-800 text-dark-100 ${
                note.content.fontSize + " " + note.content.fontWeight
              } focus:outline-none focus:ring-1 focus:ring-dark-300`}
              value={note.content.value}
            />
            <p
              className={`${
                existingContentLength !== 1000
                  ? "text-dark-200"
                  : "text-red-200"
              } text-xs justify-self-end`}
            >
              {existingContentLength} / 1000
            </p>
          </div>
          <button
            className="inline-block bg-red-500 rounded-sm p-2 text-sm font-semibold text-dark-100 hover:bg-red-600 transition ease-in-out duration-150 ml-2"
            onClick={() => {
              setNoteSidebar(false);
              notes.deleteNote(note._id);
            }}
          >
            Delete
          </button>
          <button
            className="p-2 bg-dark-600 text-dark-200 text-sm font-bold ml-2 rounded-sm hover:bg-dark-700 transition ease-in-out duration-150"
            onClick={() => {
              setNoteSidebar(false);
            }}
          >
            Close
          </button>
        </>
      )}
      {addNew && (
        <>
          <div className="p-2 grid gap-1">
            <label className="font-bold text-dark-200">Title: </label>
            <input
              type="text"
              className="p-2 rounded-sm bg-dark-800 text-dark-100 text-sm focus:outline-none focus:ring-1 focus:ring-dark-300"
              ref={titleRef}
            />
            <label className="font-bold text-dark-200">Content: </label>
            <textarea
              maxLength={1000}
              rows="14"
              className="p-2 rounded-sm bg-dark-800 text-dark-100 text-sm focus:outline-none focus:ring-1 focus:ring-dark-300"
              ref={contentRef}
            />
            <p
              className={`${
                contentLength !== 1000 ? "text-dark-200" : "text-red-200"
              } text-xs justify-self-end`}
            >
              {contentLength} / 1000
            </p>
            <div className="flex gap-1">
              <select
                className="p-2 w-1/3 rounded-sm bg-dark-800 text-dark-100 text-sm focus:outline-none focus:ring-1 focus:ring-dark-300"
                ref={fontSizeRef}
              >
                <option className="text-xs" value="text-xs">
                  Text
                </option>
                <option className="text-sm" value="text-sm">
                  Text
                </option>
                <option className="text-base" value="text-base">
                  Text
                </option>
                <option className="text-lg" value="text-lg">
                  Text
                </option>
                <option className="text-xl" value="text-xl">
                  Text
                </option>
                <option className="text-2xl" value="text-2xl">
                  Text
                </option>
                <option className="text-3xl" value="text-3xl">
                  Text
                </option>
              </select>
              <select
                className="p-2 w-1/3 rounded-sm bg-dark-800 text-dark-100 text-sm focus:outline-none focus:ring-1 focus:ring-dark-300"
                ref={fontWeightRef}
              >
                <option className="font-medium" value="font-medium">
                  Text
                </option>
                <option className="font-semibold" value="font-semibold">
                  Text
                </option>
                <option className="font-bold" value="font-bold">
                  Text
                </option>
                <option className="font-extrabold" value="font-extrabold">
                  Text
                </option>
                <option className="font-black" value="font-black">
                  Text
                </option>
              </select>
              <input
                className="p-2 w-1/3 rounded-sm bg-dark-800 text-dark-100 text-sm focus:outline-none focus:ring-1 focus:ring-dark-300"
                ref={colorRef}
              />
            </div>
          </div>
          <button
            className="p-2 bg-dark-600 text-dark-200 text-sm font-bold ml-2 rounded-sm hover:bg-dark-700 transition ease-in-out duration-150 float-r"
            onClick={() => {
              notes.createNote(noteData);
              setNoteSidebar(false);
            }}
          >
            Create
          </button>
          <button
            className="p-2 bg-dark-600 text-dark-200 text-sm font-bold ml-2 rounded-sm hover:bg-dark-700 transition ease-in-out duration-150"
            onClick={() => {
              setNoteSidebar(false);
            }}
          >
            Close
          </button>
        </>
      )}
    </div>
  );
}
