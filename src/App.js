import styles from "./App.module.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import NavBar from "./components/NavBar/NavBar";
import GoHome from "./components/GoHome/GoHome";

const App = () => {
  return (
    <div>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/projects" exact element={<Projects />} />
          <Route path="/skills" exact element={<Skills />} />
          <Route path="/contact" exact element={<Contact />} />
          
        </Routes>
      </HashRouter>
      {/* <h1>test</h1> */}
    </div>
  );
};

export default App;
