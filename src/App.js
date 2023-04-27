import React from "react";
/**
 * Import app from firebase/index to desplegate firebase.
 */
import { app } from "./firebase/index";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header></Header>
      <main className="p-6">Hello World!</main>
    </>
  );
}

export default App;
