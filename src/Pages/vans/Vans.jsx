import React from "react";
import "./vans.css"
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
export default function Vans() {
  const [vans, setVans] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type")
  console.log(typeFilter)
console.log(searchParams.toString())
  const filteredVans = typeFilter ? vans.filter(van => van.type === typeFilter) : vans;



  const vanElements = filteredVans.map((van) => (
  // const vanElements = vans.map((van) => (
    <Link to={van.id} state={{search : `?${searchParams.toString()}` , type : typeFilter }} className="vanscard-link">
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


  function handleFilterChange(key, value) {
    setSearchParams(prevParams => {
      if (value === null) {
        prevParams.delete(key, value)
      }
      else {
        prevParams.set(key, value)
      }
      return prevParams
    })
  }

  return (
    <div className="Vans-container">
      <div className="vans-nav">
        <h1 className="vans-heading">Explore our van options</h1>
        <ul className="vans-filters-list">

          {/* not the best method , hardcoding the search params is not the way */}
          {/* <li className="van-type simple selected" > <Link to="?type=simple">Simple</Link></li>
          <li className="van-type rugged selected">  <Link to="?type=rugged"> Rugged </Link></li>
          <li className="van-type luxury selected"> <Link to="?type=luxury"> Luxury </Link></li> */}
        </ul>
        {/* 
        this method of filtering causes removal of other params in the url which we dont want , like if some other params is also involved doing some other task ,would
        be cleared due to these filtering  */}

        {/* <button   className="van-type simple"  onClick={()=>{SetSearchParams({type ,  "simple"})} }>Simple</button>
        <button className="van-type rugged" onClick={()=>{SetSearchParams({type : "rugged"})} }>Rugged</button>
        <button className="van-type luxury" onClick={()=>{SetSearchParams({type : "luxury"})} }>Luxury</button>
        <button  className="van-type clear-filters " onClick={()=>{SetSearchParams({})} }>Clear filters</button> */}

        <button className= {`${typeFilter==="simple"?"selected" : ""} van-type simple`} onClick={() =>  handleFilterChange("type", "simple") }>Simple</button>
        <button className={`${typeFilter==="rugged" ?"selected" : ""} van-type rugged`}onClick={() =>  handleFilterChange("type", "rugged") }>Rugged</button>
        <button className={`${typeFilter==="luxury" ?"selected" : ""} van-type luxury`}onClick={() =>  handleFilterChange("type", "luxury") }>Luxury</button>
      { typeFilter? ( <button className="van-type clear-filters " onClick={() => { handleFilterChange("type", "") }}>Clear filters</button>
      ) : null
      }

      </div>
      <div className="van-list-container">
        <div className="van-list">{vanElements}</div>
      </div>
    </div>
  );
}
