import React from "react";

const UsersCard = ({ email, avatar, first_name, last_name }) => {
  return (
    <div className="col">
      <div className="card shadow-sm m-2" >
        <img
          width="100%"
          src={avatar}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{first_name + " " + last_name}</h5>
          <p className="card-text">Email: {email}</p>
        </div>
      </div>
    </div>
  );
};

export default UsersCard;
