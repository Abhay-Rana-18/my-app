import React, { useState } from "react";
// import { Outlet, Link } from "react-router-dom";
import PropTypes from 'prop-types'

export default function Navbar(attr) {
  
  return (
    <>
      <nav className={`navbar navbar-expand-lg  navbar-${attr.mode}`} style={{backgroundColor: attr.mode==='light'?'rgb(174,174,174)':'rgb(63,63,63)'}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {attr.name}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a href={`#`} className="nav-link active" aria-current="page">Home</a>
              </li>
              <li className="nav-item">
              <a href={`#`} className="nav-link">About</a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            <div className="form-check form-switch ms-4">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={attr.toggleGmode} />
              <label className= {`form-check-label text-${attr.mode==='light'?'dark':"light"}`} htmlFor="flexSwitchCheckDefault">{attr.Gmode==='light'?'Green':"Light"} mode</label>
            </div>
            <div className="form-check form-switch ms-4">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={attr.toggleMode} />
              <label className= {`form-check-label text-${attr.mode==='light'?'dark':"light"}`} htmlFor="flexSwitchCheckDefault">{attr.mode==='light'?'Dark':"Light"} mode</label>
            </div>
          </div>
        </div>
        
      </nav>
    </>
  );
}

// Navbar.propTypes = {
//     name : PropTypes.string.isRequired, 
//     aboutTitle : PropTypes.string
// }

// Navbar.defaultProps = {
//     name: "Title",
//     aboutTitle: "About"

// }
