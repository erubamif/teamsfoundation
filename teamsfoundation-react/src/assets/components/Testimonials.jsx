function Testimonials() {

    const testimonials = [

        {
            name:"Sarah M.",
            story:
            "T.E.A.M.S in partnership with twhe musk foundations gave me confidence to pursue my dream business and connect with experienced mentors."
        },

        {
            name:"David R.",
            story:
            "The mentorship helped me transition into a rewarding technology career."
        },

        {
            name:"Linda K.",
            story:
            " I was able to be a beneficiary of the musk foundations through the T.E.A.M.S. Initiative, and I  was able to discovered a renewed purpose by mentoring younger generations within my community."
        }

    ];

    return (

<section
className="testimonials"
id="testimonials">

<div className="section-title">

<h2>Participant Stories</h2>

<p>

Fictional experiences from members of the initiative.

</p>

</div>

<div className="testimonial-grid">

{

testimonials.map((item,index)=>(

<div
className="testimonial"
key={index}>

<p>

"{item.story}"

</p>

<h4>

— {item.name}

</h4>

</div>

))

}

</div>

</section>

    );

}

export default Testimonials;