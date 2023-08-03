export default function Note({ something }) {
  return (
    <>
      <div className="max-w-sm rounded overflow-auto shadow-md bg-dark-700 m-8 transition duration-200ms ease-in-out hover:cursor-pointer hover:scale-105 hover:shadow-xl">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-dark-200">
            {something}
          </div>
          <p className="text-dark-200 text-base">
            This is a simple card component using Tailwind CSS.This is a simple
            This is a simple card component using Tailwind CSS.This is a
            simpleThis is a simple card component using Tailwind CSS.This is a
            simple
          </p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-dark-800 rounded-md px-3 py-1 text-sm font-semibold text-dark-200 mr-2">
            Tag 1
          </span>
          <span className="inline-block bg-dark-800 rounded-md px-3 py-1 text-sm font-semibold text-dark-200">
            Tag 2
          </span>
        </div>
      </div>
    </>
  );
}
