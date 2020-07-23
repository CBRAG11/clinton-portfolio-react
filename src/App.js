import React, { Component } from 'react';
import Header from './components/Header';
// import About from './components/about/about';
// import Resume from './components/resume/resume';
// import Portfolio from './components/portfolio/portfolio';
// import Testimonials from  './components/testimonials/testimonials';
// import ContactUs from './components/contactus/contactus';
// import Footer from './components/footer/footer';
import Particles from 'react-particles-js'; 

const particlesOptions = {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Particles className="particles" params={particlesOptions} />
    
        {/* <About />
        <Resume />
        <Portfolio />
        <Testimonials />
        <ContactUs />
        <Footer /> */}
      </div>
    );
  }
}

export default App;
