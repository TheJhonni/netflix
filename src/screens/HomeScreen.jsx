import React from "react";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import Row from "../components/Row";
// import "../Components/Styles/HomeScreen.css";
import requests from "../Requests";
import Footer from "../components/Footer";

function HomeScreen() {
  return (
    <div className="homeScreen">
      {/* Nav */}
      <Nav />

      {/* Banner */}
      <Banner />

      {/* Row */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomeScreen;
