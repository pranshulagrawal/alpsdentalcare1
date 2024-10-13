import React from "react";

const Preloader = () => {
  return (
    <div
      className="preloader-area text-center position-fixed top-0 bottom-0 start-0 end-0"
      id="preloader"
    >
      <div className="loader position-absolute start-0 end-0">
        <img src="assets/images/favicon.png" alt="favicon" />
        <div className="waviy position-relative">
          <span className="d-inline-block">A</span>
          <span className="d-inline-block">L</span>
          <span className="d-inline-block">P</span>
          <span className="d-inline-block">S</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
