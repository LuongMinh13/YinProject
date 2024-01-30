import React from "react";
import NavBar from "../components/Navbar";
import "../assets/Css/Home.css";
import HomeContent from "../components/HomeContent";

function Home() {
  return (
    <>
      <div className="Home">
        <NavBar isHomePage={true} />
        <HomeContent />
      </div>
    </>
  );
}

export default Home;
