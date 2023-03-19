import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  setTimeout(() => {
    setAlert(null);
  }, 1500);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled", "success");
      // document.title = "TextUtils-Dark Mode";
      // setInterval(() => {
      //   document.title = 'TextUtils is Amezing Mode'
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now'
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      // document.title = "TextUtils-Light Mode";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About TextUtils"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route
              path="/"
              element={
                <TextForm
                  heading="Try TextUtils- Word counter, Character-counter, Remove extra spaces"
                  showAlert={showAlert}
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
