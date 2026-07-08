import "./App.css";

import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Resume from "./components/Resume/Resume";
// import Blogs from "./pages/Blogs/Blogs";
// import Contact from "./pages/Contact/Contact";
// import ProjectsPage from "./pages/Projects/ProjectsPage";
// import About from "./pages/About/About";

const App = () => {
  return (
    <>
       <Routes>

         <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/resume"
          element={<Resume />}
        />
    </Routes>
    </>
  );
};

export default App;