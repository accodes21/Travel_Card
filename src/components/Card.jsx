import React from "react";

function Card(props){
    console.log(props)
    return(
        <>
        <div className="card">
            <img src={`${props.item.imageUrl}`} alt="" className="image"/>
            <div className="info">
                <span className="location"> 📌{props.item.location}</span> <a href={`${props.item.googleMapsUrl}`} className="gmap">View on Google Maps</a>
                <h1>{props.item.title}</h1>
                <p className="date">{props.item.startDate} - {props.item.endDate}</p>
                <p className="descp">{props.item.description}</p>
            </div>
        </div>
        </>
    )
}

export default Card;