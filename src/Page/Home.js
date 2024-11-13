import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate();
  const navigateHandler=()=>{
    navigate('/product')
  }
  return (
    <div>
      <h1>home page</h1>
      <Link to="/product"> go to product page</Link>
       <button onClick={navigateHandler}>Navigate</button>
    </div>
  )
}

export default Home
