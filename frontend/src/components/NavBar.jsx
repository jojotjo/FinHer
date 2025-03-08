import React from "react";

function NavBar() {
  return (
    <>
      <div className="container mt-4">
        <nav className="navbar navbar-expand-lg bg-transparent text-white sticky-top">
          <div className="container-fluid">
            <a className="navbar-brand text-white" href="#">
              FinHer
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
                  <a className="nav-link active text-white" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-secondary" aria-disabled="true">
                    Link
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
