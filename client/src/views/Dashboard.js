import { useEffect } from "react";
import { layout } from "../css/classes";
import Note from "../components/Note";
import axios from "axios";
import axiosInstance from "../context/interceptors";

export default function Dashboard() {
  const array = [1, 2, 3, 4, 5];
  useEffect(() => {
    const get = async () => {
      axiosInstance.get("http://localhost:5000/dashboard").then((response) => {
        console.log(response);
      });
    };

    get();
  }, []);

  return (
    <div className={layout.view}>
      {array.map((arr, i) => {
        return <Note key={i} something={arr} />;
      })}
    </div>
  );
}
