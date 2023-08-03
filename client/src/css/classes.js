export const layout = {
  view: "flex flex-wrap h-screen overflow-auto",
  login: {
    form: "flex items-center justify-center h-screen m-auto",
    inputs: "",
  },
};

export const sidebar = {
  sidebar: {
    expanded:
      "bg-dark-900 w-56 p-4 flex flex-col h-auto transition-all duration-200 flex-shrink-0",
    collapsed:
      "bg-dark-900 w-20 p-4 flex flex-col h-auto transition-all duration-200 flex-shrink-0",
  },
  li: {
    expanded:
      "p-4 text-sm text-dark-300 hover:bg-dark-800 rounded-md transition duration-100 cursor-pointer flex items-center justify-between",
    collapsed:
      "p-4 text-sm text-dark-300 hover:bg-dark-800 rounded-md transition duration-100 cursor-pointer flex items-center justify-center",
  },
};

export const errors = {
  login: "text-red-300 p-4 ",
};
