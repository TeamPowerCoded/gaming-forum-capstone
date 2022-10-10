import React from "react";
import { Col, Container, ListGroup, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

function ForumDiscussions() {
  const isActive = () => {};

  return (
    <section className="">
      <Container>
        <ListGroup>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-center py-4"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">ANNOUNCEMENTS</div>
              <small className="text-muted">
                This page contains all announcements about the community
              </small>
            </div>
            <Link to={`/forum/${"announcements"}`} className="">
              Threads
            </Link>
            {/* <Badge bg="primary" pill>
              14
            </Badge> */}
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-center py-4"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">GENERAL</div>
              <small className="text-muted">
                Discuss anything you want about that doesn't fit other forums
              </small>
            </div>
            <Link to={`/forum/${"general"}`} className="">
              Threads
            </Link>
            {/* <Badge bg="primary" pill>
              14
            </Badge> */}
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-center py-4"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">GAMING</div>
              <small className="text-muted">
                Engage with others and chit-chat with them anything about gaming
              </small>
            </div>
            <Link to={`/forum/${"gaming"}`} className="">
              Threads
            </Link>
            {/* <Badge bg="primary" pill>
              14
            </Badge> */}
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </section>
  );
}

export default ForumDiscussions;
