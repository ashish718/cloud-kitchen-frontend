import React from "react";
import {Link} from "react-router-dom";

function Navbar(){

  return(
    <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to ="/" className="navbar-brand">Kitchen</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="navbar-item">
              <Link to="/addDish" className="nav-link">Add Dish</Link>
            </li>
            <li className="navbar-item">
              <Link to="/orderSummary" className="nav-link">Order</Link>
            </li>
            <li className="navbar-item">
              <Link to="/summary" className="nav-link">Orders Summary</Link>
            </li>
          </ul>
        </div>

      </nav>
    </div>
  )
}


export default Navbar;
