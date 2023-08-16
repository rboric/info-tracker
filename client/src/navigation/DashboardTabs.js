export default function DashboardTabs({ tab, setTab }) {
  return (
    <>
      <div className="flex bg-dark-900 z-30 w-full sticky top-0 divide-x text-sm font-bold">
        <button
          onClick={() => {
            setTab("Notes");
          }}
          className="ml-8 p-2 text-dark-300 hover:bg-dark-700 transition ease-in-out duration-150"
        >
          Notes
        </button>
        <button
          onClick={() => {
            setTab("Passwords");
          }}
          className="p-2 text-dark-300 hover:bg-dark-700 transition ease-in-out duration-150"
        >
          Passwords
        </button>
      </div>
    </>
  );
}
