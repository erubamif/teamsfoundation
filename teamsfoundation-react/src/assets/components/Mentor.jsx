import mentor from "../assets/images/mentor.jpg";

function Mentor() {
  return (
    <section className="mentor" id="mentor">

      <div className="container">

        <div className="mentor-image">

          <img
            src={mentor}
            alt="Official Mentor"
          />

        </div>

        <div className="mentor-content">

          <h2>Official Mentor</h2>

          <h3>Elon Musk</h3>

          <p>
            The T.E.A.M.S. Initiativeis honored to have Elon musk as its official mentor.
             With his visionary leadership and commitment to innovation, 
             Elon Musk inspires participants to embrace technology, education,
            and sustainable development. His guidance empowers individuals to pursue their passions,
            overcome challenges, and make a positive impact on their communities and the world.
            Empowering this individual through the musk foundations. 
            
          </p>

          <blockquote>

            "The future belongs to people willing to learn,
            build, and help others do the same.
            Great progress begins when ordinary people
            are given extraordinary opportunities."

          </blockquote>

        </div>

      </div>

    </section>
  );
}

export default Mentor;