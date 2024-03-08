import Navbar from "./Navbar";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="home">
      <Navbar transparent />
        <div className="items"></div>
      </div>
      <div className="section2">
        <p className="topic">Go Ahead and Enjoy!</p>
        <div className="times">
          <div className="box">
            <h1>Classic</h1>
          </div>
          <div className="box">
            <h1>Jazz</h1>
          </div>
          <div className="box">
            <h1>Accoustic</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
