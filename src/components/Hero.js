import React from "react";

const Hero = ({ handleFetchUsers }) => {
  return (
    <div className="bg-dark text-secondary px-4  text-center">
      <div className="py-5">
        <h1 className="display-5 fw-bold text-white">FetchWala App</h1>
        <div className="col-lg-6 mx-auto">
          <p className="fs-5 mb-4">
            FetchWala App is a web application that allows users to retrieve and
            display user data from an external API. With this app, users can
            fetch data on a group of users, including their names, email
            addresses, phone numbers, and locations. The app is built with
            React, a popular front-end framework, and is designed to be simple
            and easy to use.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button
              type="button"
              className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
              onClick={handleFetchUsers}
            >
              Get Users
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
