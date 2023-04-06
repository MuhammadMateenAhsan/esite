import React from 'react'
import Navbarleft from './Navbarleft'
const Navbar = (props) => {
  const {counter}=props
  const {data}=props
  const {searchBtn}=props

  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-light bg-light container-fluid">
  <Navbarleft counter={counter} data={data} searchBtn={searchBtn}/>
  
</nav>

    </div>
  )
}

export default Navbar