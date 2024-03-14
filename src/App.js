import { useState } from "react";
import Home from "./components/Home";
import "./App.css";

const App = () => {
  const loginDetails = [
    { id: 1, user: "madhav", password: "madhav@123" },
    { id: 2, user: "pavan", password: "pavan@123" },
    { id: 3, user: "akhil", password: "akhil@123" },
  ];
  const [name, setUser] = useState("");
  const [pword, setPword] = useState("");
  const [isLogin, setLogin] = useState(false);
  const [jokesList, setJokes] = useState([]);

  const onChangeUser = (event) => {
    setUser(event.target.value);
  };

  const onChangePword = (event) => {
    setPword(event.target.value);
  };

  const onSubmitForm = async (event) => {
    event.preventDefault();
    if (name !== "" && pword !== "") {
      const correctUser = loginDetails.filter((each) => each.user === name);
      if (correctUser[0].password === pword) {
        const url =
          "https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10";
        const response = await fetch(url);
        const data = await response.json();
        setJokes(data.jokes);
        setLogin(true);
      } else {
        setLogin(false);
      }
    }
  };

  const onLogout = (d) => {
    setLogin(d);
    setUser("");
    setPword("");
  };

  return (
    <>
      {isLogin ? (
        <Home onLogout={onLogout} details={jokesList} />
      ) : (
        <div className="bg-container">
          <form className="login-page" onSubmit={onSubmitForm}>
            <h1>Login</h1>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" onChange={onChangeUser} />
            <label htmlFor="password">Password</label>
            <input id="password" type="password" onChange={onChangePword} />
            <button type="submit">Login</button>
          </form>
        </div>
      )}
    </>
  );
};

export default App;
