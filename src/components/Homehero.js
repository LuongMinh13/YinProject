import React from "react";
import "../assets/Css/Homehero.css";

function Homehero() {
  return (
    <div className="home-hero-descr">
      <div className="mask">
        <div className="split-line firstDropDown">
          <p>Lorem Ipsum is simply dummy text of the, </p>
        </div>
      </div>
      <div className="mask">
        <div className="split-line secondDropDown">
          <p>
            <i> printing and typesetting industry. </i>Lorem Ipsum has been the
            industry's
          </p>
        </div>
      </div>
      <div className="mask">
        <div className="split-line thirdDropDown">
          <p>
            standard dummy text ever since the 1500s,
            <i>when an unknown printer</i> took a galley
          </p>
        </div>
      </div>
      <div className="mask">
        <div className="split-line fourDropDown">
          <p>
            of type <i>and scrambled it to make.</i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Homehero;
