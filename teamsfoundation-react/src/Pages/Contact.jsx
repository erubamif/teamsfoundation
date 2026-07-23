import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact(){

return(

<>

<Navbar />

<section className="contact-page">

<div className="container">

<h1>

Contact Us

</h1>

<p>

We'd love to hear from you.

</p>

<div className="contact-grid">

<div>

<h3>Email</h3>

<p>

info@teamsinitiative.org

</p>

</div>

<div>

<h3>Phone</h3>

<p>

+1 (000) 000-0000

</p>

</div>

<div>

<h3>Office Hours</h3>

<p>

Monday - Friday

9:00 AM - 5:00 PM

</p>

</div>

</div>

<form className="contact-form">

<input
placeholder="Your Name"
required
/>

<input
type="email"
placeholder="Email"
required
/>

<textarea
placeholder="Message"
required
></textarea>

<button>

Send Message

</button>

</form>

</div>

</section>

<Footer />

</>

);

}

export default Contact;