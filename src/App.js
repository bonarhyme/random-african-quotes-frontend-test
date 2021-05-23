import { useState } from "react";
import "./App.css";

function App() {
  const [res, setRes] = useState("");
  const getData = async () => {
    await fetch("https://random-african-quotes.herokuapp.com/api")
      .then((response) => response.json())
      .then((data) => setRes(data.api));
  };

  return (
    <div className="App">
      <h2>Data from backend: {res}</h2>
      <button onClick={() => getData()}>GET DATA</button>
    </div>
  );
}

export default App;
