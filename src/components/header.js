import React from "react"
import Scrollspy from "react-scrollspy"
import { Navbar, Nav } from "react-bootstrap"
import Scroller from './scroller'

import imgLogo from '../images/newlogo.png';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this);
  }

  render() {
    return (
      <>
        <Navbar className="navbar navbar-expand-sm navbar-light fixed-top" id="mainNav" expand="sm"
          collapseOnSelect={true}>
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="/"><img src={imgLogo} style={{height: "40px", width: "100px"}} alt="Tutor-X" /></a>
            <Navbar.Toggle aria-controls="navbarResponsive" />
            <Navbar.Collapse id="navbarResponsive">
              <Nav className="navbar-nav ml-auto my-2 my-lg-0">
                <Scrollspy className="navbar-nav"
                  items={["about", "services", "portfolio", "contact"]}
                  currentClassName="active" rootEl={"#mainNav"} offset={-75}>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#about" onClick={Scroller.handleAnchorScroll}>About</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#services" onClick={Scroller.handleAnchorScroll}>Services</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#portfolio" onClick={Scroller.handleAnchorScroll}>Gallery</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#contact" onClick={Scroller.handleAnchorScroll}>Contact</Nav.Link>
                  </li>
                </Scrollspy>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
        <header className="masthead">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-10 p-4 align-self-end">
                <h1 className="p-4 text-white font-weight-bold">tutorX</h1>
                <hr className="divider my-6 p-2" />
              </div>
              <div className="col-lg-8 p-2 align-self-baseline">
                <p className="text-white-75 p-2 font-weight-light mb-5">The Largest Open Source Platform for Students and Knowledge Seekers! </p>
                {/* <a className="btn btn-primary p-2 m-2 rounded-pill btn-l js-scroll-trigger" href="#about" onClick={Scroller.handleAnchorScroll}> <i class="fa fa-android fa-2x"></i>  Download<br /> <small>Android Version</small></a>&nbsp;&nbsp;&nbsp;
                <a className="btn btn-primary p-2 m-2 rounded-pill btn-l js-scroll-trigger" href="#about" onClick={Scroller.handleAnchorScroll}> <i class="fa fa-apple fa-2x"></i>Download<br /> <small>iOs Version </small></a> */}
                <a className="btn btn-primary p-2 m-2 rounded-pill btn-l js-scroll-trigger" href="https://play.google.com/store/apps/details?id=tutor.x"> <i class="fa fa-android fa-2x"></i>  Download<br /> <small>Android Version</small></a>&nbsp;&nbsp;&nbsp;
                <a className="btn btn-primary p-2 m-2 rounded-pill btn-l js-scroll-trigger" href="#about" onClick={Scroller.handleAnchorScroll}> <i class="fa fa-apple fa-2x"></i>Download<br /> <small>iOs Version </small></a>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}
