import React from "react";
import ReactDOM from "react-dom";
import LoginForm from "./LoginForm";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <LoginForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
