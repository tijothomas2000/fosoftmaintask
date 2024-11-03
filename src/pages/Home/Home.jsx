import "./Home.scss";
import home from "../../assets/images/home.png";
import tata from "../../assets/images/ratan-tata.png";
import apj from "../../assets/images/apjabdulkalam.png";

const Home = () => {
  return (
    <div className="home">
      <div className="homepage">
        <div className="container">
          <div className="content">
            <p className="sub-title">Launching Soon</p>
            <h1 className="title">The FO Solutions</h1>
            <p className="description">
              Innovative solutions for a better world, enhancing the future with
              technology.
            </p>
          </div>
          <div className="image-container">
            <img
              src={home}
              alt="FO solutions"
              className="home-image"
            />
          </div>
        </div>
      </div>

      <div id="aboutus" className="aboutus">
        <div className="aboutusContainer">
          <h2 className="title">About Us</h2>
          <p className="description">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
            Et harum quidem rerum facilis est et expedita distinctio. Itaque earum rerum hic tenetur a sapiente delectus,
            ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
          </p>
        </div>
      </div>

      <div className="models">
        <h2 className="section-title">Our Role Models</h2>
        <div className="modelsContainer">
          <div className="modelsContent">
            <img
              src={tata}
              alt="Ratan Tata"
              className="model-image"
            />
            <h3 className="modelsTitle">Ratan Tata</h3>
            <p className="modelsDescription">
              If you want to walk fast, walk alone. But if you want to walk
              far, walk together.
            </p>
          </div>

          <div className="modelsContent">
            <img
              src={apj}
              alt="APJ Abdul Kalam"
              className="model-image"
            />
            <h3 className="modelsTitle">APJ Abdul Kalam</h3>
            <p className="modelsDescription">
              Dream, dream, dream. Dreams transform into thoughts and thoughts
              result in action.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

