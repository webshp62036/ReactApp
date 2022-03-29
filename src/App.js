
import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import Services from "./Services";
import Careers from "./Careers";
import Packages from "./Packages";
import About from "./About";
import Blogs from "./Blogs";
import WhyUs from "./WhyUs";
import {
  BrowserRouter as Router, Route, Routes
} from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/service" element={<Services />} />
          <Route exact path="/package" element={<Packages/>} />
          <Route exact path="/whyus" element={<WhyUs />} />
          <Route exact path="/blog" element={<Blogs/>} />
          <Route exact path="/career" element={<Careers />} />
          <Route exact path="/contact" element={<Contact/>} />
        </Routes>
      </Router>



    );
  }
} export default App;