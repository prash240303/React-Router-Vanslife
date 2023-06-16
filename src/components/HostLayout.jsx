import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
function HostLayout() {
    return (
        <>
            <div>
                <ul className='host-layout-nav'>
                    <li> <Link to="/host">Dashboard</Link></li>
                    <li> <Link to="/host/income">Income</Link></li>
                    <li> <Link to="/host/review">Reviews</Link></li>
                </ul>
            </div>
            <Outlet />
        </>
    )
}

export default HostLayout