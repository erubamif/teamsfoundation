import students from "../assets/images/students.jpg";
import entrepreneurs from "../assets/images/Entrepreneurs.jpg";
import veterans from "../assets/images/veterans.jpg";
import teachers from "../assets/images/teachers.jpg";
import responders from "../assets/images/first-responders.jpg";
import retirees from "../assets/images/retirees.jpg";

function Participants() {

    const participants = [

        {
            title:"Students",
            image:students,
            icon:"fas fa-user-graduate",
            description:
            "Develop research projects, leadership skills, and innovative ideas through mentorship."
        },

        {
            title:"Entrepreneurs",
            image:entrepreneurs,
            icon:"fas fa-briefcase",
            description:
            "Receive expert guidance that helps grow sustainable businesses."
        },

        {
            title:"Veterans",
            image:veterans,
            icon:"fas fa-user-shield",
            description:
            "Transition into rewarding careers in technology and manufacturing."
        },

        {
            title:"Teachers",
            image:teachers,
            icon:"fas fa-chalkboard-teacher",
            description:
            "Discover innovative teaching methods and educational technology."
        },

        {
            title:"First Responders",
            image:responders,
            icon:"fas fa-fire-extinguisher",
            description:
            "Strengthen leadership and disaster preparedness skills."
        },

        {
            title:"Retirees",
            image:retirees,
            icon:"fas fa-users",
            description:
            "Mentor younger generations while remaining active in community service."
        }

    ];

    return (

<section
className="participants"
id="participants">

<div className="section-title">

<h2>Who Benefits?</h2>

<p>People from every walk of life.</p>

</div>

<div className="cards">

{

participants.map((person,index)=>(

<div
className="card"
key={index}>

<i className={person.icon}></i>

<h3>{person.title}</h3>

<img
src={person.image}
alt={person.title}
/>

<p>

{person.description}

</p>

</div>

))

}

</div>

</section>

    );

}

export default Participants;