import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Sidecar from "./components/Sidecar/sidecar";
import Subwork from "./components/Works/Subworks/subwork";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/projects" element={<Works />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/intro" element={<Intro />} />
        </Routes>
      </BrowserRouter>
      <div className="Duoscreen">
        <Navbar />
        <Intro />
        <Skills />
        <Works />
        <Subwork />

        <Contact />
        <Footer />
        <holder />
      </div>
      <Sidecar />
    </div>
  );
}

export default App;
