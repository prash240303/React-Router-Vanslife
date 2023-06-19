import React from 'react'
import { useOutletContext } from 'react-router-dom'
function HostvanPhotos() {
  const [currentVan , setCurrentVan] = useOutletContext();
  
  return (
    <div> 
        <img src={currentVan.imageUrl} className="host-van-detail-image" />
    </div>
  )
}

export default HostvanPhotos