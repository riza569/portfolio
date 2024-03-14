import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/contact";

function App() {
  return (
    <main>
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
