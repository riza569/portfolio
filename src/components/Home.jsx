import banner from "../assets/header-img.svg";
import "../home.css";
const Home = () => {
  return (
    <div className="home-container">
      <div className="image-container">
        <img className="banner" src={banner} />
      </div>
      <div className="home-content">
        <h1 className="home-content-heading">HELLO IAM RIZA</h1>
        <p className="home-content-para">Self taught front end developer</p>

        <div className="home-content-button">
          <h3>CV</h3>
          <h3>Hire me</h3>
        </div>
      </div>
      <div className="container">
        <div className="moon">
          <div className="crater carter1"></div>
          <div className="crater carter2"></div>
          <div className="crater carter3"></div>
          <div className="crater carter4"></div>
          <div className="crater carter5"></div>
          <div className="shadow"></div>
        </div>
        <div className="orbit">
          <div className="rocket"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
