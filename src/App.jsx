import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/CountingCard/CountingCard";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Card></Card>
    </>
  );
}

export default App;
document.querySelector("html").setAttribute("data-theme", "light");
