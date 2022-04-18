import { Routes, Route } from "react-router-dom";
import React from "react";

import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App" >
      <Header />
       <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;
