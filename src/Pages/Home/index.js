import "./Index.css";

import React, { useEffect } from "react";
import MetaBall from "../../components/metaBalls";
import NavbarTwo from "../../components/Navbar2";
import Text from "../../components/animatedText";
import ContactButton from "../../components/contactButton";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="Home__MetaBallContainer">
        <MetaBall />
      </div>
      <div className="Home">
        <div className="Home__navContainer">
          <NavbarTwo />
        </div>
        <div className="Home__textContainer">
          <p className="tags">{"<h1>"}</p>
          <Text />
          <p className="tags">{"</h1>"}</p>
        </div>
        <div className="Home__contactButtonContainer">
          <ContactButton />
        </div>
      </div>
    </>
  );
};

export default Home;
