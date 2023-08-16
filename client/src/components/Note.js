import { components } from "../css/classes";

export default function Note({
  data,
  noteSidebar,
  setNoteSidebar,
  setNote,
  setAddNew,
}) {
  return (
    <>
      <div
        onClick={() => {
          setNote(data);
          setAddNew(false);
          // eslint-disable-next-line
          {
            !noteSidebar && setNoteSidebar(!noteSidebar);
          }
        }}
        className={components.note}
      >
        <div className="px-6 py-4">
          <div className="font-semibold text-md mb-2 text-dark-200 break-words">
            {data.title}
          </div>
          <p
            style={{ color: data.content.color }}
            className={`text-dark-200 break-words ${
              data.content.fontSize + " " + data.content.fontWeight
            }`}
          >
            {data.content.value}
          </p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-dark-800 rounded-sm px-3 py-1 text-sm font-semibold text-dark-200 mr-2">
            Tag 1
          </span>
          <span className="inline-block bg-dark-800 rounded-sm px-3 py-1 text-sm font-semibold text-dark-200">
            Tag 2
          </span>
        </div>
      </div>
    </>
  );
}
