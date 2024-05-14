import React from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Projects from "./components/project/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/footer";
import "./App.css";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <main className="main absolute bottom-0 left-0 right-0 top-0 bg-linear-gradient bg-size mask-image">
      <Header />
      <Home />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
