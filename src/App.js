import * as React from "react";
import { useState } from "react";
// import * as ReactDOM from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Alert from "./components/Alert";
import Form from "./components/Form";



function App() {
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
    if (mode === "light" || Gmode=="dark") {
      setMode("dark");
      // setGmode("light");
      document.body.style.color = "white";
      document.body.style.backgroundColor = "rgb(68, 68, 98)";
      showAlert("dark mode has been enabled!", "success");
      document.title = "Survey-Dark";
    } else {
      setMode("light");
      // setGmode("");
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled!", "success");
      document.title = "Survey-light";
    }
  };

  const toggleGmode = () => {
    if (Gmode === "light" || mode=="dark") {
      // setMode("dark");
      setGmode("dark");
      document.body.style.color = "white";
      document.body.style.backgroundColor = "green";
      showAlert("green mode has been enabled!", "success");
    } else {
      // setMode("light");
      setGmode("light");
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled!", "success");
    }
  };

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: (
  //       <>
  //         <Navbar
  //           name="Web"
  //           mode={mode}
  //           Gmode = {Gmode}
  //           toggleMode={toggleMode}
  //           toggleGmode={toggleGmode}
  //         />
  //         <Alert alert={alert} />

  //         <Form heading="Just a servey" mode={mode} showAlert={showAlert} />
  //       </>
  //     ),
  //   },
  //   {
  //     path: "/about",
  //     element: 
  //     <>
  //       <Navbar
  //         name="Web"
  //         mode={mode}
  //         Gmode = {Gmode}
  //         toggleMode={toggleMode}
  //         toggleGmode={toggleGmode}
  //       />
  //       <Alert alert={alert} />

  //       <About />
  //     </>
  //   },
  // ]);

  // ReactDOM.createRoot(document.getElementById("root")).render(
  //   <React.StrictMode>
  //     <RouterProvider router={router} />
  //   </React.StrictMode>
  // );

  return(
    <>
      <Navbar
        name="Web"
        mode={mode}
        Gmode = {Gmode}
        toggleMode={toggleMode}
        toggleGmode={toggleGmode}
      />
      <Alert alert={alert} />

      <Form heading="Just a servey" mode={mode} showAlert={showAlert} />
    </>
  )
}

export default App;
