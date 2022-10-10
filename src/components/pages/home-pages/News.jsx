import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import * as actionGames from "../../../redux/actions/actionGames";

import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import Games from "./Games";

function News() {
  const listOfGames = useSelector((state) => state.upcomingGames);
  const { getGames } = bindActionCreators(actionGames, useDispatch());

  //pagination properties
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 6;
  const pagesVisited = pageNumber * usersPerPage;

  //react pagination
  const pageCount = Math.ceil(listOfGames.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const fetchGames = () => {
    axios
      .get(
        "https://rawg.io/api/games?key=1a6f3d75b83c42bf9ad135d4f3a60d0a&dates=2022-10-01,2022-10-30&platforms=18,1,7"
      )
      .then((res) => {
        getGames(res.data.results);
      });
  };

  useEffect(() => {
    fetchGames();
  }, []);

  const displayGames = listOfGames
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((games, index) => {
      return (
        <div className="col-md-4 p-3 text-white position-relative" key={index}>
          <Games
            index={index}
            name={games.name}
            background_img={
              games.background_image || games.platforms.image_background
            }
            rating={games.rating}
          />
        </div>
      );
    });

  return (
    <section className="py-5 section-title bg-dark">
      <Container className="py-5">
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex">
              <div className="section-title pe-2 flex-grow-0 d-flex align-items-center justify-content-start py-2">
                <h3 className="fw-bold text-white">UPCOMING GAMES</h3>
              </div>
              <div className="right-bar flex-grow-1 d-flex align-items-center justify-content-center">
                <div className="right-stick w-100"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          {displayGames}
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
        <div className="row">
          <div className="col-md-8 p-3">
            <div className=" d-flex ">
              <div className="section-title pe-2 flex-grow-0 d-flex align-items-center justify-content-center py-2">
                <h3 className="fw-bold text-white">LATEST NEWS</h3>
              </div>
              <div className="right-bar flex-grow-1 d-flex align-items-center justify-content-center me-2">
                <div className="right-stick w-100"></div>
              </div>
            </div>
            <div className="row g-1">
              <div className="col-md-6">
                <div className="card rounded-0">
                  <img
                    className="card-img-top"
                    src="https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                  <div className="card-body bg-dark">
                    <h5 className="card-title">NEWS 1</h5>
                    <p className="card-text text-white small">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Molestiae, enim?
                    </p>
                    <small className="text-muted">08/29/2022</small>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card rounded-0">
                  <img
                    className="card-img-top"
                    src="https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                  <div className="card-body bg-dark ">
                    <h5 className="card-title">NEWS 2</h5>
                    <p className="card-text text-white small">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eius, porro?
                    </p>
                    <small className="text-muted">09/01/2022</small>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card rounded-0">
                  <img
                    className="card-img-top"
                    src="https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                  <div className="card-body bg-dark ">
                    <h5 className="card-title">NEWS 3</h5>
                    <p className="card-text text-white small">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Veniam, velit?
                    </p>
                    <small className="text-muted">09/01/2022</small>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card rounded-0">
                  <img
                    className="card-img-top"
                    src="https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                  <div className="card-body bg-dark ">
                    <h5 className="card-title">NEWS 4</h5>
                    <p className="card-text text-white small">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eius, officia!
                    </p>
                    <small className="text-muted">09/01/2022</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-3">
            <div className="d-flex">
              <div className="right-bar pe-2 flex-grow-1 d-flex align-items-center justify-content-center">
                <div className="right-stick w-100"></div>
              </div>
              <div className="section-title pe-0 flex-grow-0 d-flex align-items-center justify-content-center py-2">
                <h3 className="fw-bold text-white">DISCUSSIONS</h3>
              </div>
              <div className="right-bar ps-2 flex-grow-1 d-flex align-items-center justify-content-center">
                <div className="right-stick w-100"></div>
              </div>
            </div>
            <div className="d-flex flex-column">
              <div className="d-flex p-3 align-items-center bg-light shadow-sm mb-3">
                <FontAwesomeIcon icon={faCircleUser} className="h2 px-3" />
                <div>
                  <span className="d-block ">What is the latest game?</span>
                  <span className="d-block text-muted small">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Alias, ipsum?
                  </span>
                </div>
              </div>
              <div className="d-flex p-3 align-items-center bg-light shadow-sm mb-3">
                <FontAwesomeIcon icon={faCircleUser} className="h2 px-3" />
                <div>
                  <span className="d-block ">What is the latest game?</span>
                  <span className="d-block text-muted small">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Alias, ipsum?
                  </span>
                </div>
              </div>
              <div className="d-flex p-3 align-items-center bg-light shadow-sm mb-3">
                <FontAwesomeIcon icon={faCircleUser} className="h2 px-3" />
                <div>
                  <span className="d-block ">What is the latest game?</span>
                  <span className="d-block text-muted small">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Alias, ipsum?
                  </span>
                </div>
              </div>
              <div className="d-flex p-3 align-items-center bg-light shadow-sm mb-3">
                <FontAwesomeIcon icon={faCircleUser} className="h2 px-3" />
                <div>
                  <span className="d-block ">What is the latest game?</span>
                  <span className="d-block text-muted small">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Alias, ipsum?
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 p-0 "></div>
        </div>
      </Container>
    </section>
  );
}

export default News;
