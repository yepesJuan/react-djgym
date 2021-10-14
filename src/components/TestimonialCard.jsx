import React from "react";

function TestimonialCard({ name, description, image }) {
   // const { brand, type, name, price } = props
   // const brand = props.brand
    return  (
        <div className="testimonial-card">
            <h3>{name}</h3>
            <p>{description}</p>
            <img src={image}/>
            </div>
    )
}

export default TestimonialCard