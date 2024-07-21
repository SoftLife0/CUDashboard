import {React, useState} from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Layout() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      <header style={{ position: "sticky", top: 0, zIndex: 100 }}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" style={{ fontWeight: "bold" }}>
              central.edu.gh
            </Link>

            <button className="navbar-toggler" type="button" onClick={toggleNav} aria-expanded={isNavOpen ? "true" : "false"}> <span className="navbar-toggler-icon"></span></button>
            <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="collapsibleNavId">
              <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" href="#">
                    Students
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#">
                    Staff
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#">
                    Alumni
                  </Link>
                </li>
              </ul>
              <div style={{ width: "fit-content" }}> 
                <Link to="/">
                  <button className="pill-button">Dashboard</button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Layout