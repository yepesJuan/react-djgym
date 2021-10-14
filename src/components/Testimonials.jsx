import React from "react";
import './testimonials.css'
import TestimonialCard from "./TestimonialCard";

const testimonialList =  [
  {
    id: 1,
    name: "Jake",
    description: "I was once fat, thanks to DJ Workout ++, I am now fit",
  
  },
  {
    id: 2,
    name: "Tom",
    description: "DJ Workout ++ is even better than any gym or workout program",
 
  },
  {
    id: 3,
    name: "Maria",
    description: "Dania and Juan are so nice. Best trainers in the world wide web!" ,

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
        /> 
       })
      }
     </div>
     </>
  )
}

export default Testimonials