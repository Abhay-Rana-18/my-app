import React, { useState } from "react";
import Navbar from "./Navbar";
import Form from "./Form";
import Alert from "./Alert";


function Home() {
  let [mode, setMode] = useState("light");
  let [Gmode, setGmode] = useState("light");
  let [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.color = "white";
      document.body.style.backgroundColor = "rgb(68, 68, 98)";
      showAlert("dark mode has been enabled!", "success");
      document.title = "Survey-Dark";
    } else {
      setMode("light");
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled!", "success");
      document.title = "Survey-light";
    }
  };

  const toggleGmode = () => {
    if (Gmode === "light") {
      setMode("dark");
      setGmode("green");
      document.body.style.color = "white";
      document.body.style.backgroundColor = "green";
      showAlert("green mode has been enabled!", "success");
    } else {
      setMode("light");
      setGmode("light");
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled!", "success");
    }
  };

  return (
    <>
      <Navbar
        name="Web"
        mode={mode}
        toggleMode={toggleMode}
        toggleGmode={toggleGmode}
      />
      <Alert alert={alert} />

      <Form heading="Just a servey" mode={mode} showAlert={showAlert} />
      {/* <About /> */}
    </>
  );
}


export default Home;
