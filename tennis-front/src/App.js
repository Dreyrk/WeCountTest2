import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { CurrentGameProvider } from "./contexts/CurrentGameContext";
import Header from "./components/Header";
import Routing from "./components/Routing";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <CurrentGameProvider>
          <Routing />
        </CurrentGameProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
