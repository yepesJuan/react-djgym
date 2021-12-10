import React from "react";
import './testimonials.css'
import TestimonialCard from "./TestimonialCard";

const testimonialList = [

  {
    id: 1,
    name: "Jake",
    description: "I was once fat, thanks to DJ Workout ++, I am now fit",
    image: "https://sworkit.com/wp-content/uploads/2019/04/justin-edwards.png"
  },
  {
    id: 2,
    name: "Tom",
    description: "DJ Workout ++ is even better than any gym or workout program",
    image: "https://sworkit.com/wp-content/uploads/2019/04/sami.png"
 
  },
  {
    id: 3,
    name: "Maria",
    description: "Dania and Juan are so nice. Best trainers in the world wide web!" ,
    image: "https://sworkit.com/wp-content/uploads/2019/04/molly.png"
  }
];

function Testimonials(){
  return(
    <>
     <h2>Testimonials</h2>
     <div className="testimonial-card">
      {testimonialList.map(person => {
        return <TestimonialCard
        key={person.id}
        name={person.name}
        description={person.description}
        image={person.image}
        /> 
       })
      }
     </div>
     </>
  )
}

export default Testimonials