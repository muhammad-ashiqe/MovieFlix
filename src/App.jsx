import "./App.css";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Row from "./Components/Row";
import requests from "./Api.js";
import Categories from "./Components/Categories.jsx";


function App() {
  return (
    <>
      <Navbar />
      <div className="app">
        <Banner fetchUrl={requests.fetchTrending} />
        <Categories />
        <Row title={"Trending"} fetchUrl={requests.fetchTrending}  />
        <Row title={"Top Rated"} fetchUrl={requests.fetchTopRated} />
        <Row title={"Netflix Originals"} fetchUrl={requests.fetchNetflixOriginals} />
        <Row title={"Action Movies"} fetchUrl={requests.fetchActionMovies} />
        <Row title={"Comedy Movies"} fetchUrl={requests.fetchComedyMovies} />
        <Row title={"Documentaries"} fetchUrl={requests.fetchDocumentaries} />
        <Row title={"Horror Movies"} fetchUrl={requests.fetchHorrorMovies} />
        <Row title={"Romance Movies"} fetchUrl={requests.fetchRomanceMovies} />
      </div>
    </>
  );
}

export default App;
