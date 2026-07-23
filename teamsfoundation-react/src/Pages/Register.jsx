import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName:"",
    lastName:"",
    email:"",
    phone:"",
    country:"",
    state:"",
    city:"",
    address:"",
    occupation:"",
    education:"",
    reason:""
  });

  function handleChange(e){

    setForm({

      ...form,

      [e.target.name]:e.target.value

    });

  }

  function generateCode(){

    const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const numbers=Math.floor(100000+Math.random()*900000);

    return `TEAMS-${letters[Math.floor(Math.random()*26)]}${letters[Math.floor(Math.random()*26)]}-${numbers}`;

  }

  function handleSubmit(e){

    e.preventDefault();

    const code=generateCode();

    localStorage.setItem("registration",JSON.stringify({

      ...form,

      code

    }));

    navigate("/success");

  }

  return (

<>
<Navbar />

<section className="register-page">

<div className="container">

<h1>Join the Initiative</h1>

<form onSubmit={handleSubmit} className="register-form">

<input
name="firstName"
placeholder="First Name"
required
onChange={handleChange}
/>

<input
name="lastName"
placeholder="Last Name"
required
onChange={handleChange}
/>

<input
type="email"
name="email"
placeholder="Email Address"
required
onChange={handleChange}
/>

<input
name="phone"
placeholder="Phone Number"
required
onChange={handleChange}
/>

<input
name="country"
placeholder="Country"
required
onChange={handleChange}
/>

<input
name="state"
placeholder="State"
required
onChange={handleChange}
/>

<input
name="city"
placeholder="City"
required
onChange={handleChange}
/>

<textarea
name="address"
placeholder="Residential Address"
required
onChange={handleChange}
/>

<input
name="occupation"
placeholder="Occupation"
onChange={handleChange}
/>

<input
name="education"
placeholder="Highest Education"
onChange={handleChange}
/>

<textarea
name="reason"
placeholder="Why do you want to join?"
required
onChange={handleChange}
/>

<button type="submit">

Submit Registration

</button>

</form>

</div>

</section>

<Footer />

</>

  );

}

export default Register;