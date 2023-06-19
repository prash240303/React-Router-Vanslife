import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation, Navigate } from "react-router-dom";
import "./vanDetails.css";

export default function VansDetails() {
  const params = useParams();
  const location = useLocation();

  const [vanDetails, setVanDetails] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVanDetails(data.vans))
      .catch((error) => setVanDetails(null)); // Set vanDetails to null if an error occurs
  }, [params.id]);

  const search = location.state && location.state.search ? location.state.search : "";

  if (vanDetails === null) {
    // Van not found, redirect to 404 page
    return <Navigate to="/404" />;
  }

  return (
    <div className="vansDetails">
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr; <span> Back to <span>{location.state && location.state.type ? location.state.type : "all" }</span> vans</span>
      </Link>

      {vanDetails ? (
        <div className="vanDetails-container">
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
