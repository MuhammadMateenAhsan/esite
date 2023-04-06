import React from 'react'
import Cart from '../pages/Cart'
import { Link } from 'react-router-dom'

const Navbarright = (props) => {
  const {counter}=props
  return (
    <div>
            <form className="form-inline my-2 my-lg-0">
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        Search
      </button>
      <Link to="/cart">
      <div class="basket-icon">
  <i class="fa fa-shopping-basket fa-2x"></i>
  <span class="counter">{counter}</span>
</div></Link>
    </form>
    
    </div>
  )
}

export default Navbarright