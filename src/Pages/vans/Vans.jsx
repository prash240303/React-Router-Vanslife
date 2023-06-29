import React from "react";
import "./vans.css";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { fetchAPI } from "../../utils/FetchAPI";
import { useLoaderData } from "react-router-dom";

export function vansloader() {
  return fetchAPI();
}

export default function Vans() {
  const vans = useLoaderData();

  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  const filteredVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const vanElements = filteredVans.map((van) => (
    <Link
      to={van.id}
      state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
      className="vanscard-link"
      key={van.id}
    >
      <div className="van-tile">
        <img src={van.imageUrl} alt={van.name} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            {van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </div>
    </Link>
  ));

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key, value);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  return (
    <div className="Vans-container">
      <div className="vans-nav">
        <h1 className="vans-heading">Explore our van options</h1>
        <ul className="vans-filters-list">
          {/* Filters */}
        </ul>
        {/* Buttons for filtering */}
      </div>
      <div className="van-list-container">
        <div className="van-list">{vanElements}</div>
      </div>
    </div>
  );
}

