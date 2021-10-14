import React from "react";
//import Testimonials from "./components/Testimonials.jsx"

function TestimonialCard({ name, description }) {
   // const { brand, type, name, price } = props
   // const brand = props.brand
    return  (
        <div className="testimonial-card">
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    )
}

export default TestimonialCard