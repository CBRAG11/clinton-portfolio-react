import React, { Component } from 'react';

export default class Header extends Component {
    
  render() {
    return (
        
      <React.Fragment>

    <div id="particles-js">
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
          </ul> {/* end #nav */}
        </nav> {/* end #nav-wrap */}
        <div className="row banner">
          <div className="banner-text">
            <div class="container">
              <div class="row">
                  <div class="col-3 mx-auto d-block">
                      <img class="rounded-circle img-fluid" src="../images/ClintonL.png" alt="" />  
                  </div>
              </div>
            </div>
            <h1 className="responsive-headline">Clinton Braganza!</h1>
            <h3><span>I'm a full-stack software engineer based in Arizona</span>, <span>illustrator</span> and <span>webdesigner</span> creating awesome and
              effective visual identities for companies of all sizes around the globe. Let's <a className="smoothscroll" href="#about">start scrolling</a>
              and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
            <hr />
            <ul className="social">
              <li><a href="https://www.linkedin.com/in/clinton-braganza/"><i className="fa fa-linkedin" /></a></li>
              <li><a href="#"><i className="fa fa-instagram" /></a></li>
              <li><a href="https://github.com/cbrag11"><i className="fa fa-github" /></a></li>
            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
        </p>
      </header>
      </div>
      </React.Fragment>
    );
  }
}