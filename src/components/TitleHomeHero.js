import React from "react";
import "../assets/Css/TitleHomeHero.css";

function TitleHomeHero() {
  return (
    <>
      <section className="home-title-view">
        <div className="card-items __container">
          <div className="home-title-text-left">
            <span className="home-title-view-text-left __uppercase">
              The
              <br />
              Peace
              <br />
              & Love
              <br />
              Issue
            </span>
            <div className="home-title-view-text-left-content __uppercase">
              <p className="tf1" style={{ fontSize: "3vw" }}>
                Summer <br /> dressing
              </p>
              <p className="s32" style={{ fontStyle: "italic" }}>
                How to take <br />
                the heat
              </p>
            </div>
          </div>
          <div className="home-title-text-right __uppercase ">
            <p
              style={{ fontFamily: "Dancing Script, cursive", fontSize: "3vw" }}
            >
              summer 2024
            </p>
            <p className="s32" style={{ marginTop: "1vw" }}>
              Skincare and <br /> fashion tips from
              <br /> industry experts
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default TitleHomeHero;
