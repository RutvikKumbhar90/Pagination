import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <Link to="/simplepagination"><button className='btn btn-primary'>SimplePagination</button></Link>
      <Link to="/paginationwithcontrols"><button className='btn btn-primary'>Pagination with controls</button></Link>
    </div>
  )
}

export default Home
