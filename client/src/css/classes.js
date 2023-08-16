export const layout = {
  login: {
    form: "flex items-center justify-center h-screen m-auto",
    inputs: "",
  },
};

export const sidebar = {
  sidebar: {
    expanded:
      "bg-dark-900 w-56 p-4 flex flex-col h-screen transition-all duration-200 flex-shrink-0 fixed z-40",
    collapsed:
      "bg-dark-900 w-20 p-4 flex flex-col h-screen transition-all duration-200 flex-shrink-0 fixed z-40",
  },
  li: {
    expanded:
      "p-4 text-md text-dark-300 hover:text-dark-200 rounded-md transition-width duration-100 cursor-pointer flex justify-start",
    collapsed:
      "p-4 text-md text-dark-300 hover:text-dark-200 rounded-md transition-width duration-100 cursor-pointer flex justify-start",
    exp_logout:
      "p-4 text-md text-red-200 hover:text-red-100 rounded-md transition duration-100 cursor-pointer flex justify-start",
    col_logout:
      "p-4 text-md text-red-200 hover:text-red-100 rounded-md transition duration-100 cursor-pointer flex justify-start",
  },
};

export const errors = {
  login: "text-red-300 p-4 ",
};

export const components = {
  note: "max-w-sm max-h-full rounded-sm shadow-md bg-dark-700 m-8 border-l-8 border-dark-600 transition-all duration-100ms ease-in-out hover:cursor-pointer hover:scale-110 hover:shadow-xl",
};
