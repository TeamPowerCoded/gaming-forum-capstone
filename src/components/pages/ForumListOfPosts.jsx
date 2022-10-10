import React from "react";
import { Button, Container, FloatingLabel, Form } from "react-bootstrap";
import ForumHero from "./forum-sections/ForumHero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function ForumListOfPosts() {
  const [showFormInput, setShowFormInput] = useState(false);

  return (
    <>
      <div className="p-5 mt-5">
        <ForumHero />
        <Container>
          {showFormInput ? (
            " "
          ) : (
            <div className="row">
              <div className="col-md">
                <button
                  className="btn btn-primary rounded-1"
                  onClick={() => setShowFormInput(true)}
                >
                  <span>
                    <FontAwesomeIcon icon={faPlus} /> New Thread
                  </span>
                </button>
              </div>
            </div>
          )}
          {showFormInput && (
            <div className="row ">
              <div className="col-md ">
                <div className="shadow-sm border-secondary bg-white p-3">
                  <div className="p-2 form-container">
                    <Form className="w-100 bg-white border-0 p-2">
                      <FloatingLabel
                        controlId="floatingTextarea2"
                        label="Title"
                        className="mb-2 text-muted"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Enter title"
                          className=" rounded-0"
                          style={{ border: "1px solid #efefef" }}
                        />
                      </FloatingLabel>

                      <FloatingLabel
                        controlId="floatingTextarea2"
                        label="Description"
                        className="text-muted"
                      >
                        <Form.Control
                          as="textarea"
                          placeholder="Leave a comment here"
                          style={{
                            height: "200px",
                            border: "1px solid #efefef",
                          }}
                          className=" rounded-0 "
                        />
                      </FloatingLabel>
                      <div className="d-flex justify-content-start mt-3">
                        <Button
                          variant="primary"
                          className="rounded-0 mt-2 me-2"
                          type="submit"
                        >
                          <FontAwesomeIcon icon={faEdit} /> POST
                        </Button>
                        <Button
                          variant="secondary"
                          className="rounded-0 mt-2"
                          onClick={() => setShowFormInput(false)}
                        >
                          <FontAwesomeIcon icon={faXmark} /> CANCEL
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Container>
      </div>
    </>
  );
}

export default ForumListOfPosts;
