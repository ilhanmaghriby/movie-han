import axios from "axios";
import React, { useEffect, useState } from "react";
import star from "/img/star.png";

const Upcoming = () => {
  const [Upcoming, SetUpcoming] = useState([]);
  const baseUrl = import.meta.env.VITE_REACT_APP_BASEURL;
  const baseImg = import.meta.env.VITE_REACT_APP_BASEIMGURL;
  const token = import.meta.env.VITE_REACT_APP_TOKEN;

  useEffect(() => {
    const upcoming = {
      method: "GET",
      url: `${baseUrl}/movie/upcoming`,
      params: { language: "en-US", page: "1" },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .request(upcoming)
      .then(function (response) {
        SetUpcoming(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="container pt-24 flex justify-center mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {Upcoming.map((result) => {
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
                <div className="card-actions justify-end my-2">
                  <button className="btn btn-neutral">
                    Soon
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Upcoming;
