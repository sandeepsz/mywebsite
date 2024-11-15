import React from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Projects from "./components/project/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/footer";
import "./App.css";
import Skills from "./components/skills/Skills";
import BeeModel from "./components/model/BeeModel";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <main className="main absolute bottom-0 left-0 right-0 top-0 bg-linear-gradient bg-size mask-image">
      <Header />
      <div id="container3D">
        <Canvas
          camera={{ fov: 45, near: 0.1, far: 1000 }}
          style={{ background: "transparent", zIndex: 2 }}
        >
          <BeeModel />
        </Canvas>
      </div>
      <Home />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
