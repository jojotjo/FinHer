import React from "react";
import budgettacker from "../assets/fea/2312056.jpg";
import feat from "../assets/feature-1/8432.jpg";
import planning from "../assets/hand-drawn-people-working-office-background/2066350.jpg";

const Features = () => {
  return (
    <div className="container px-4 py-5" id="custom-cards">
      <h2 className="pb-2 border-bottom text-dark-success fw-bold fs-1">Features About</h2>

      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        {/* Card 1 */}
        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{ backgroundImage: `url(${budgettacker})`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-dark-success  text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Budget Tracker</h3>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img
                    src={budgettacker}
                    alt="Bootstrap"
                    width="32"
                    height="32"
                    className="rounded-circle border border-white"
                  />
                </li>
                <li className="d-flex align-items-center me-3">
                  <small>Earth</small>
                </li>
                <li className="d-flex align-items-center">
                  <small>3d</small>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{ backgroundImage: `url(${feat})`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-dark-success  text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Investing</h3>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img
                    src={feat}
                    alt="Bootstrap"
                    width="32"
                    height="32"
                    className="rounded-circle border border-white"
                  />
                </li>
                <li className="d-flex align-items-center me-3">
                  <small>Pakistan</small>
                </li>
                <li className="d-flex align-items-center">
                  <small>4d</small>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{ backgroundImage: `url(${planning})`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3  text-dark-success text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1  fw-bold">Learning</h3>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img
                    src={planning}
                    alt="Bootstrap"
                    width="32"
                    height="32"
                    className="rounded-circle border border-white"
                  />
                </li>
                <li className="d-flex align-items-center me-3">
                  <small>California</small>
                </li>
                <li className="d-flex align-items-center">
                  <small>5d</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{ backgroundImage: `url(${budgettacker})`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-dark-success  text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Budget Tracker</h3>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img
                    src={budgettacker}
                    alt="Bootstrap"
                    width="32"
                    height="32"
                    className="rounded-circle border border-white"
                  />
                </li>
                <li className="d-flex align-items-center me-3">
                  <small>Earth</small>
                </li>
                <li className="d-flex align-items-center">
                  <small>3d</small>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{ backgroundImage: `url(${feat})`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-dark-success  text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Investing</h3>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img
                    src={feat}
                    alt="Bootstrap"
                    width="32"
                    height="32"
                    className="rounded-circle border border-white"
                  />
                </li>
                <li className="d-flex align-items-center me-3">
                  <small>Pakistan</small>
                </li>
                <li className="d-flex align-items-center">
                  <small>4d</small>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{ backgroundImage: `url(${planning})`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3  text-dark-success text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1  fw-bold">Learning</h3>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img
                    src={planning}
                    alt="Bootstrap"
                    width="32"
                    height="32"
                    className="rounded-circle border border-white"
                  />
                </li>
                <li className="d-flex align-items-center me-3">
                  <small>California</small>
                </li>
                <li className="d-flex align-items-center">
                  <small>5d</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
