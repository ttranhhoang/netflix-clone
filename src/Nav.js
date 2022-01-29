import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  // hàm xử lý khi scroll xuống thì thanh navbar sẽ có background màu đen -> css
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src="../logo_netflix.png" alt="Netflix Logo" />
      <img className="nav__avatar" alt="Remy Sharp" src="../logo_netflix.png" />
    </div>
  );
}

export default Nav;
