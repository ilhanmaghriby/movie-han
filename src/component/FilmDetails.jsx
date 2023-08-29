import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import star from "/img/star.png";

const FilmDetails = () => {
  const { id } = useParams();
  const [Details, SetFilmDetails] = useState(null);
  const history = useNavigate();
  const baseUrl = import.meta.env.VITE_REACT_APP_BASEURL;
  const baseImg = import.meta.env.VITE_REACT_APP_BASEIMGURL;
  const token = import.meta.env.VITE_REACT_APP_TOKEN;

  const goBack = () => {
    history(-1);
  };

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(`${baseUrl}/movie/${id}?language=en-US`, options)
      .then((response) => response.json())
      .then((response) => {
        SetFilmDetails(response);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container pt-24 lg:pt-12 flex justify-center mb-20">
      {Details !== null ? (
        <div className="hero min-h-screen ">
          <div
            className="hero-content flex-col lg:flex-row"
            key={Details.id}
          >
            <img
              src={`${baseImg}${Details.poster_path}`}
              className="max-w-xs md:max-w-sm rounded-lg shadow-2xl"
            />
            <div className="lg:ml-10 mx-2 mt-3 md:mt-3 lg:mt-0">
              <h1 className="text-4xl md:text-5xl lg:mt-10  font-bold">
                {Details.title}
              </h1>
              <p className="py-6">{Details.overview}</p>
              <h5 className="font-semibold">Runtime</h5>
              <p>{Details.runtime} Mins</p>
              <h5 className="font-semibold">Genre</h5>
              <div className="flex">
                {Details.length !== 0 &&
                  Details.genres.map((item) => {
                    return (
                      <p key={item.id}>
                        {item.name},&nbsp;
                      </p>
                    );
                  })}
              </div>
              <h5 className="font-semibold">Release on</h5>
              <p>{Details.release_date}</p>
              <h5 className="font-semibold">Rating</h5>
              <div className="flex">
                <img
                  src={star}
                  alt=""
                  className="w-5 mr-1"
                />
                <p className="font-semibold">
                  {Details.vote_average}
                </p>
              </div>
              <br />
              <h4 className="font-semibold md:text-xl ">
                Production Companies
              </h4>
              <br />
              <div className="grid grid-cols-2 md:grid-cols-3">
                {Details.length !== 0 &&
                  Details.production_companies.map(
                    (item) => {
                      return (
                        <img
                          key={item.id}
                          src={`https://image.tmdb.org/t/p/w500/${item.logo_path}`}
                          alt={item.name}
                          className="h-full w-40"
                        />
                      );
                    }
                  )}
              </div>
              <button
                className="btn btn-neutral mt-10"
                onClick={goBack}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="lg:p-20">Loading...</h1>
      )}
    </div>
  );
};

export default FilmDetails;
