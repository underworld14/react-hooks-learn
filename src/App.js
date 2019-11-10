import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Yusril");
  const [input, setInput] = useState(null);

  const handleChangeName = event => {
    event.preventDefault();
    setName(input);
    setInput(null);
  };

  return (
    <div className="Container">
      <h1> Hello, {name} Selamat Siang ! </h1>
      <form>
        <input onChange={event => setInput(event.target.value)} value={input} />
        <button onClick={event => handleChangeName(event)}> Submit </button>
      </form>
    </div>
  );
}

export default App;
