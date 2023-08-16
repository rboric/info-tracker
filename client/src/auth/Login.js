import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { layout, errors } from "../css/classes";
import { saveTokenToStorage } from "../context/storage";
import axios from "axios";

export default function Login() {
  const [error, setError] = useState();
  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  const login = async () => {
    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    axios
      .post("http://localhost:5000/login", user)
      .then((response) => {
        saveTokenToStorage(response.data.token);

        navigate("/dashboard");
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          setError(error.response.data.message);
        }
        if (error.response && error.response.status === 500) {
          setError(error.response.data.message);
        }
        console.log(error.response);
      });
  };

  return (
    <>
      <div className={layout.login.form}>
        <div className="p-8 text-center text-dark-100">
          <h2>Login</h2>
          <form className="text-dark-700">
            <div className="my-4">
              <input
                className="p-2 focus:outline-none rounded-sm"
                placeholder="username"
                type="text"
                ref={emailRef}
              ></input>
            </div>
            <div className="my-4">
              <input
                className="p-2 focus:outline-none rounded-sm"
                placeholder="password"
                type="password"
                ref={passwordRef}
              ></input>
            </div>
          </form>
          <button
            onClick={login}
            className="px-4 py-2 bg-dark-600 rounded-sm hover:bg-dark-700 active:bg-dark-800 hover:border-red-300 transition ease-in-out duration-100ms text-dark-200 shadow-xl"
          >
            Sign in
          </button>
          <div className={errors.login}>{error}</div>
        </div>
      </div>
    </>
  );
}
