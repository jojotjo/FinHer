import React from "react";
import female from "../assets copy/female.jpg";

const Testimonials = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4">What Our Customers Say</h2>
      <div className="row justify-content-center">
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="col-md-4">
            <div className="card text-center p-3 shadow-sm" style={{ width: "18rem" }}>
              <img
                src={female}
                className="card-img-top rounded-circle mx-auto d-block"
                alt="Testimonial"
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">John Doe</h5>
                <p className="card-text">
                  "This product changed my life! Highly recommend to everyone."
                </p>
                <a href="#" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
