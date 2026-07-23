import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        <h1>
          Empowering People.
          <br />
          Transforming Communities.
          <br />
          Building the Future.
        </h1>

        <p>
          The T.E.A.M.S Initiative in partnership with the musk foundations brings together people
          of all ages and backgrounds through technology,
          education, mentorship and sustainable development.
        </p>

        <div className="hero-buttons">

          <Link to="/about" className="btn">
            Learn More
          </Link>

          <a href="#impact" className="btn btn-outline">
            Our Impact
          </a>

        </div>

      </div>
    </section>
  );
}

export default Hero;