import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FloatingLabel, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="d-flex flex-column bg-dark vh-100 justify-content-center align-items-center">
      <div className="login-container w-25 border border-dark shadow px-5 py-5">
        <div className="brand-title text-white text-center">
          <span>
            PAWER<span className="color-text-secondary">CODED</span>
          </span>
        </div>
        <div className="p-3 mt-2">
          <hr className="text-secondary" />
          <small className="text-white">SIGN IN</small>
          <Form>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3 mt-3"
            >
              <Form.Control
                type="email"
                placeholder="name@example.com"
                className="rounded-0 bg-secondary border-0 text-white"
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control
                type="password"
                placeholder="Password"
                className="rounded-0 bg-secondary border-0 text-white"
              />
            </FloatingLabel>
            <Form.Group className="my-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                className="text-secondary"
                label="Remember me?"
              />
            </Form.Group>
            <button
              type="submit"
              className="btn btn-primary btn-lg w-100 rounded-0 my-3"
            >
              <small className="text-sm"> LOG IN NOW</small>
            </button>
            <Link to="/" className="text-decoration-none">
              <small className="text-primary">
                <FontAwesomeIcon icon={faArrowLeft} /> Back to Home page
              </small>
            </Link>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
