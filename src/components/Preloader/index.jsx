import React from "react";

const Preloader = () => {
  return (
    <div
      class="preloader-area text-center position-fixed top-0 bottom-0 start-0 end-0"
      id="preloader"
    >
      <div class="loader position-absolute start-0 end-0">
        <img src="/assets/images/favicon.jpg" alt="favicon" />
        <div class="waviy position-relative">
          <span class="d-inline-block">A</span>
          <span class="d-inline-block">L</span>
          <span class="d-inline-block">P</span>
          <span class="d-inline-block">S</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
