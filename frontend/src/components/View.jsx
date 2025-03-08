import React from "react";
import money from "../assets/landing-image.png";

function View() {
  return (
    <>
      <main>
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src={money}
                className="d-block mx-lg-auto img-fluid-10"
                alt="Internet Banking"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold text-light lh-1 mb-3">
                FindHerself in Finance
              </h1>
              <p className="lead text-light">
                Quickly design and customize responsive mobile-first sites with
                Bootstrap, the world’s most popular front-end open-source
                toolkit, featuring Sass variables and mixins, responsive grid
                system, extensive prebuilt components, and powerful JavaScript
                plugins.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
                  Primary
                </button>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                  Default
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container">
            <a href=""></a>
        </div> */}
      </main>
    </>
  );
}

export default View;
