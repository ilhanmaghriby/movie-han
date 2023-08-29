import axios from "axios";
import React, { useEffect, useState } from "react";
import star from "/img/star.png";
import { Link } from "react-router-dom";

const Film = () => {
  const [Popular, SetPopular] = useState([]);
  const baseUrl = import.meta.env.VITE_REACT_APP_BASEURL;
  const baseImg = import.meta.env.VITE_REACT_APP_BASEIMGURL;
  const token = import.meta.env.VITE_REACT_APP_TOKEN;

  useEffect(() => {
    async function fetchPopularMovies() {
      const popular = {
        method: "GET",
        url: `${baseUrl}/movie/popular`,
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const response = await axios.request(popular);
        SetPopular(response.data.results);
      } catch (error) {
        console.error(error);
      }
    }

    fetchPopularMovies();
  }, []);

  return (
    <div className="container pt-24 flex justify-center mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {Popular.map((result) => {
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

export default Film;
