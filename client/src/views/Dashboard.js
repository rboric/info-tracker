import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/scrollbar.css";
import { notes } from "../utils/notes";
import { checkForToken } from "../context/storage";
import DashboardTabs from "../navigation/DashboardTabs";
import Notes from "./Notes";
import Passwords from "./Passwords";
import NotesRightSidebar from "../components/NotesRightSidebar";

export default function Dashboard() {
  const navigate = useNavigate();

  const [notesData, setNotesData] = useState([]);
  const [noteSidebar, setNoteSidebar] = useState(false);
  const [tab, setTab] = useState("Notes");

  const [note, setNote] = useState();
  const [addNew, setAddNew] = useState(false);

  useEffect(() => {
    const fetchNotes = async () => {
      checkForToken(navigate);

      try {
        const data = await notes.getNotes();
        setNotesData(data);
      } catch (error) {}
    };

    fetchNotes();
  }, [navigate, notesData]);

  return (
    <>
      <div className="ml-20 bg-dark-800 h-screen overflow-hidden">
        <DashboardTabs tab={tab} setTab={setTab} />
        <div className={`grid grid-cols-6`}>
          <div
            className={`flex h-screen overflow-auto ${
              noteSidebar ? "col-span-4" : "col-span-6"
            }`}
          >
            {tab === "Notes" ? (
              <Notes
                notesData={notesData}
                noteSidebar={noteSidebar}
                setNoteSidebar={setNoteSidebar}
                setNote={setNote}
                setAddNew={setAddNew}
              />
            ) : (
              <Passwords />
            )}
          </div>
          <NotesRightSidebar
            note={note}
            addNew={addNew}
            noteSidebar={noteSidebar}
            setNoteSidebar={setNoteSidebar}
            setNote={setNote}
            setAddNew={setAddNew}
          />
        </div>
      </div>
    </>
  );
}
