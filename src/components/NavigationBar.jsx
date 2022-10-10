import { useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

function NavigationBar() {
  // const [navBgColor, setNavBgColor] = useState(false);

  // const changeBgColor = () => {
  //   if (window.scrollY >= 190) {
  //     setNavBgColor(true);
  //   } else {
  //     setNavBgColor(false);
  //   }
  // };

  // window.addEventListener("scroll", changeBgColor);
  return (
    <Navbar
      expand="lg"
      variant="dark"
      className="py-4"
      fixed="top"
      style={{ backgroundColor: "#0f0e0e" }}
    >
      <Container>
        <Navbar.Brand className="text-white">
          <span>
            PAWER<span className="color-text-secondary">CODED</span>
          </span>
        </Navbar.Brand>
        <div className="nav-btns order-lg-2 d-none d-lg-block ">
          <Link
            to="/login"
            className="btn custom-btn login-btn me-2 rounded-0"
            type="button"
          >
            <span className="">LOGIN</span>
          </Link>
          <Link
            to="/register"
            className="btn custom-btn signup-btn  rounded-0"
            type="button"
          >
            <span className="">SIGNUP</span>
          </Link>
        </div>
        <Navbar.Toggle className="border-0">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse className="order-lg-1">
          <ul className="navbar-nav  text-center">
            <li className="nav-item p-2">
              <NavLink to="/" className="nav-link  text-uppercase">
                HOME
              </NavLink>
            </li>
            <li className="nav-item p-2">
              <NavLink to="/about-us" className="nav-link  text-uppercase">
                ABOUT US
              </NavLink>
            </li>
            <li className="nav-item p-2">
              <NavLink to="/forum" className="nav-link  text-uppercase">
                FORUM
              </NavLink>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
