import React, { useEffect, useState } from "react";
import star from "/img/star.png";
import { Link } from "react-router-dom";

const SearchFilm = () => {
  const [Search, setSearch] = useState("");
  const [ResultFilm, SetResultFilm] = useState([]);
  const baseUrl = import.meta.env.VITE_REACT_APP_BASEURL;
  const baseImg = import.meta.env.VITE_REACT_APP_BASEIMGURL;
  const token = import.meta.env.VITE_REACT_APP_TOKEN;

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(`${baseUrl}/search/movie?query=${Search}&language=en-US`, options)
      .then((response) => response.json())
      .then((response) => {
        SetResultFilm(response.results);
      })
      .catch((err) => console.error(err));
  }, [Search]);

  return (
    <div className=" pt-24 mb-20">
      <div className="flex flex-col items-center">
        <input
          type="text"
          placeholder="Search By Film Name"
          className="input input-bordered w-60 md:w-80 lg:w-96 mb-4"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Search By Year"
          className="input input-bordered w-60 md:w-80 lg:w-96 mb-7"
          onChange={handleChange}
        />
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {ResultFilm.map((result) => {
            return (
              <div
                className="card card-compact w-80 bg-base-100 shadow-xl"
                key={result.id}
              >
                <figure>
                  <img src={`${baseImg}${result.poster_path}`} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{result.title}</h2>
                  <p>{result.overview}</p>
                  <div className=" my-2 flex">
                    <img src={star} alt="" className="w-5 mr-1" />
                    <p className="font-semibold">{result.vote_average}</p>
                  </div>
                  <div className="card-actions justify-end my-2">
                    <Link to={`/filmdetail/${result.id}`}>
                      <button className="btn btn-neutral">Details</button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchFilm;
