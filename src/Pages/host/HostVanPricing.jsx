import React from 'react'
import { useOutletContext } from 'react-router-dom'
function HostVanPricing() {
    const [currentVan , setCurrentVan ] = useOutletContext();
    console.log(currentVan.price)
  return (
    <div>

        <h3 className="host-van-price">${currentVan.price}<span>/day</span></h3>
    </div>
  ) 
}

export default HostVanPricing