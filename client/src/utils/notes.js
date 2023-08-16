import axiosInstance from "../context/interceptors";

const createNote = async (noteData) => {
  await axiosInstance
    .post(process.env.REACT_APP_SERVER + "/note", noteData)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
      if (error.response && error.response.status === 500) {
        console.log(error.response.message);
      }
    });
};

const deleteNote = async (id) => {
  try {
    await axiosInstance.delete(`${process.env.REACT_APP_SERVER}/note/${id}`);
    console.log(`Note with ID ${id} has been deleted.`);
  } catch (error) {
    if (error.response && error.response.status === 500) {
      console.log(error.response.data.message);
    }
  }
};

const getNotes = async () => {
  try {
    const response = await axiosInstance.get(
      process.env.REACT_APP_SERVER + "/dashboard"
    );
    return response.data.notes;
  } catch (error) {
    if (error.response) {
      if (error.response.status === 500) {
        console.log("Server Error:", error.response.data.message);
      } else if (error.response.status === 401) {
        console.log("Unauthorized:", error.response.data.message);
      }
    }
  }
};

export const notes = { createNote, getNotes, deleteNote };
