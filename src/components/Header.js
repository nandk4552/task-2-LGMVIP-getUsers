import React from "react";

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary sticky-top bg-dark"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <div className="d-flex text-white justify-content-center align-items-center">
          <img
            className="navbar-brand mx-0"
            style={{ width: "100px" }}
            src="https://ik.imagekit.io/fhe9c5aen/fetch1__PDEmKjif.png?updatedAt=1683735243348"
            alt=""
          />
          <h1 className="fs-5">Wala</h1>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        ></div>
      </div>
    </nav>
  );
};

export default Header;
