import axios from "axios";
import React, { useEffect, useState } from "react";
import star from "/img/star.png";
import { Link } from "react-router-dom";

const TopRated = () => {
  const [TopRated, SetTopRated] = useState([]);
  const baseUrl = import.meta.env.VITE_REACT_APP_BASEURL;
  const baseImg = import.meta.env.VITE_REACT_APP_BASEIMGURL;
  const token = import.meta.env.VITE_REACT_APP_TOKEN;

  useEffect(() => {
    const options = {
      method: "GET",
      url: `${baseUrl}/movie/top_rated`,
      params: { language: "en-US", page: "1" },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        SetTopRated(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <div className="container pt-24 flex justify-center mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {TopRated.map((result) => {
          return (
            <div
              className="card card-compact w-80 bg-base-100 shadow-xl"
              key={result.id}
            >
              <figure>
                <img
                  src={`${baseImg}${result.poster_path}`}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {result.title}
                </h2>
                <p>{result.overview}</p>
                <div className=" my-2 flex ">
                  <img
                    src={star}
                    alt=""
                    className="w-5 mr-1"
                  />
                  <p className="font-semibold">
                    {result.vote_average}
                  </p>
                </div>
                <div className="card-actions justify-end my-2">
                  <Link to={`/filmdetail/${result.id}`}>
                    <button className="btn btn-neutral">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopRated;
