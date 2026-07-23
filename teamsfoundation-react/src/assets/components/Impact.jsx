import { useEffect, useState } from "react";

function Counter({ target }) {

    const [count,setCount]=useState(0);

    useEffect(()=>{

        let start=0;

        const duration=2000;

        const increment=target/100;

        const timer=setInterval(()=>{

            start+=increment;

            if(start>=target){

                setCount(target);

                clearInterval(timer);

            }else{

                setCount(Math.floor(start));

            }

        },duration/100);

        return()=>clearInterval(timer);

    },[target]);

    return count;

}

function Impact(){

return(

<section
className="impact"
id="impact">

<div className="section-title">

<h2>Community Impact</h2>

<p>

Creating meaningful change across communities.

</p>

</div>

<div className="stats">

<div className="stat">

<h2>

<Counter target={15000}/>

</h2>

<p>Participants</p>

</div>

<div className="stat">

<h2>

<Counter target={60}/>

</h2>

<p>Countries</p>

</div>

<div className="stat">

<h2>

<Counter target={500}/>

</h2>

<p>Community Projects</p>

</div>

<div className="stat">

<h2>

<Counter target={95}/>

</h2>

<p>Success Stories (%)</p>

</div>

</div>

</section>

);

}

export default Impact;