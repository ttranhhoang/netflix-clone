import React from "react";
import "./App.css";
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";
import requests from "./requests";

function App() {
  return (
    <div className="app">
      {/* navbar  */}
      <Nav />
      {/* banner */}
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}
// API KEY 781e6ce2a4f96470fd5035b811a8a25c
export default App;
