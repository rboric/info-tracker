import Note from "../components/Note";

export default function Notes({
  notesData,
  noteSidebar,
  setNoteSidebar,
  setNote,
  setAddNew,
}) {
  return (
    <div>
      <div className="flex">
        <div className="flex flex-wrap pb-20">
          {notesData.map((note, i) => {
            return (
              <Note
                noteSidebar={noteSidebar}
                setNoteSidebar={setNoteSidebar}
                key={i}
                data={note}
                setNote={setNote}
                setAddNew={setAddNew}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
