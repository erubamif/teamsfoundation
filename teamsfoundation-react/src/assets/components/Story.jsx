import community from "../assets/images/community.jpg";

function Story() {
  return (
    <section className="story">

      <div className="container">

        <div className="story-image">
          <img
            src={community}
            alt="Community"
          />
        </div>

        <div className="story-content">

          <h2>Lives Transformed Through Opportunity</h2>

          <p>
            Since its launch, the  T.E.A.M.S.
            Initiative has selected thousands of
            participants from diverse backgrounds
            to join its global mentorship network
            and benfit from the musk foundations. 
          </p>

          <p>
            Every participant is chosen based on
            their desire to want to change their life,
            and positively influence their family, profession, and community.
          </p>

          <p>
            The initiative believes that opportunity
            should never be limited by age,
            profession, or background.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Story;