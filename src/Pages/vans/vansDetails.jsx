import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./vanDetails.css"
export default function VansDetails() {
  const params = useParams();
  // console.log(params)"
  const [vanDetails, setVanDetails] = useState(null);
  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVanDetails(data.vans));
  }, [params.id]);

  return (
    <div className="vansDetails">
      {vanDetails ? (
        <div className="vanDetails-container">
          <div className="backbutton-container">
           <div className="backbutton">
           
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              width={24}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>

            <Link to="/vans" className="vanDetails-back">
              back to all vans
            </Link>

            </div>
          </div>
          <img className="van-image" src={vanDetails.imageUrl} alt="" />
          <div className={`van-type ${vanDetails.type} selected`}>
            {vanDetails.type}
          </div>
          <h1>{vanDetails.name}</h1>
          <div>
            {" "}
            <span className="van-price">${vanDetails.price}</span>/Day
          </div>
          <p className="van-description">{vanDetails.description}</p>
          <button className="van-link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
