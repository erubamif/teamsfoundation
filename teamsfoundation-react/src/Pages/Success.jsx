import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Success() {

    const applicant=JSON.parse(

        localStorage.getItem("registration")

    );

    return(

<>

<Navbar />

<section className="success-page">

<div className="container">

<h1>

🎉 Registration Successful

</h1>

<p>

Thank you for applying to the
T.E.A.M.S Initiative.

</p>

<h2>

Applicant Information

</h2>

<p>

<strong>Name:</strong>

{applicant?.firstName}

{" "}

{applicant?.lastName}

</p>

<p>

<strong>Email:</strong>

{applicant?.email}

</p>

<p>

<strong>Phone:</strong>

{applicant?.phone}

</p>

<div className="code-box">

<h3>

Your Registration Code

</h3>

<h1>

{applicant?.code}

</h1>

</div>

<p>

Please keep this code for your records.

</p>

</div>

</section>

<Footer />

</>

    );

}

export default Success;