import React from "react";
import Film from "./component/Film";
import Navbar from "./component/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NowPlaying from "./component/NowPlaying";
import TopRated from "./component/TopRated";
import Upcoming from "./component/Upcoming";
import SearchFilm from "./component/SearchFilm";
import FilmDetails from "./component/FilmDetails";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Film />} />
          <Route path="/nowplaying" element={<NowPlaying />} />
          <Route path="/toprated" element={<TopRated />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/search" element={<SearchFilm />} />
          <Route path="/filmdetail/:id" element={<FilmDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
