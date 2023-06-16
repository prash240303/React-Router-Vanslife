import React from "react";
import "./vans.css"
import { Link } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vanElements = vans.map((van) => (
    <Link to={`/vans/${van.id}`} className="vanscard-link">
      <div key={van.id} className="van-tile">
        <img src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </div>
    </Link>
  ));

  return (
    <div className="Vans-container">
      <div className="vans-nav">
        <h1 className="vans-heading">Explore our van options</h1>
        <ul className="vans-filters-list">
           
          <li className="van-type simple selected">Simple</li>
          <li className="van-type rugged selected">Rugged</li>
          <li className="van-type luxury selected">Luxury</li>
        </ul>
        <div className="vans-filter-clear">Clear Filters</div>
      </div>
      <div className="van-list-container">
        <div className="van-list">{vanElements}</div>
      </div>
    </div>
  );
}
