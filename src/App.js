import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [input, setInput] = useState(null);
  const [user, setUser] = useState(false);

  useEffect(() => {
    //hooks lifecycle
    console.log("use effect active");
    const fetchUser = async () => {
      await axios({
        method: "GET",
        url: `https://jsonplaceholder.typicode.com/users?username=${input}`
      })
        .then(response => {
          setUser(response.data[0]);
        })
        .catch(err => {
          console.log(err);
        });
    };

    fetchUser();
  }, [input]);

  return (
    <div className="Container">
      <input
        type="search"
        onChange={event => setInput(event.target.value)}
        value={input}
      />

      {user ? (
        <div>
          <h3> {user.email} </h3>
          <h3> {user.name} </h3>
        </div>
      ) : (
        <div>
          <h3> User not Found </h3>
        </div>
      )}
    </div>
  );
};

export default App;
