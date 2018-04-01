import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./styles/css/Global.css";
import "./App.css";

//App components

import Header from "./components/Header";
import Footer from "./components/Footer";

//Pages

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Career from "./pages/Career";

import AdaptiveHeader from "./components/AdaptiveHeader";
const menuList = ["About", "Services", "Career", "Contact"];

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div className="App">
      <AdaptiveHeader elements={menuList} />
      <Route exact path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/career" component={Career} />
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
