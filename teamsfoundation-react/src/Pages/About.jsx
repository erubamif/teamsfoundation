import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <section className="page-banner">
        <div className="container">
          <h1>About T.E.A.M.S Initiative</h1>
          <p>
            Technology • Education • Assistance • Mission • Sustainability
          </p>
        </div>
      </section>

      <section className="about-page">
        <div className="container">

          <h2>Our Vision</h2>

          <p>
            The fictional T.E.A.M.S Initiative was created to demonstrate how
            mentorship, education, innovation, and community service can
            empower people to create positive change around the world.
          </p>

          <h2>Our Mission</h2>

          <p>
            We believe every individual deserves opportunities to learn,
            innovate, collaborate, and improve their communities regardless of
            age, profession, or background.
          </p>

          <h2>Who Can Participate?</h2>

          <ul>
            <li>Students</li>
            <li>Teachers</li>
            <li>Veterans</li>
            <li>Entrepreneurs</li>
            <li>First Responders</li>
            <li>Retirees</li>
            <li>Community Leaders</li>
          </ul>

          <h2>Core Values</h2>

          <div className="values-grid">

            <div className="value-card">
              <h3>Innovation</h3>
              <p>Encouraging creative thinking and modern solutions.</p>
            </div>

            <div className="value-card">
              <h3>Leadership</h3>
              <p>Developing confident leaders who inspire others.</p>
            </div>

            <div className="value-card">
              <h3>Service</h3>
              <p>Giving back through humanitarian and community projects.</p>
            </div>

            <div className="value-card">
              <h3>Sustainability</h3>
              <p>Creating long-term positive impact for future generations.</p>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;