import { Link } from "react-router-dom";

function CTA() {

    return (

<section className="cta">

<h2>

Ready to be  a beneficiary of the musk foundations through the T.E.A.M.S. Initiative? and Build a Better Future?

</h2>

<p>

Join a worldwide community dedicated to empowering individuals through technology,education, innovation,leadership, and sustainable impact.

</p>

<Link
to="/register"
className="btn">

Join the Initiative

</Link>

</section>

    );

}

export default CTA;