import React, { useState, useEffect } from "react";

export const Spinner = ({ minDuration }) => {
  const [count, setCount] = useState(minDuration);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => --prev);
    }, 1000);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <>
      <div
        className="d-flex 
flex-column
justify-content-center align-items-center "
        style={{ minHeight: "100vh" }}
      >
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};
export default Spinner;
