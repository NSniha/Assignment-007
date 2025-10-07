import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/CountingCard/CountingCard";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Card></Card>
      <Footer></Footer>
    </>
  );
}

export default App;
document.querySelector("html").setAttribute("data-theme", "light");
