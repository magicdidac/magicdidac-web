import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Projects from "./components/projects/Projects";
import ProjectDetails from "./components/project-details/ProjectDetails";
import ScrollToTop from "./components/ScrollToTop";
import About from "./components/about/About";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/projects' component={Projects} />
          <Route path='/project/:id' component={ProjectDetails} />
          <Route path='/about' component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
