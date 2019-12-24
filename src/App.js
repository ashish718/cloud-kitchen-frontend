import React from 'react';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar"
import Order from "./component/Dish"
import CreateDish from "./component/Add";
import OrderStatus from "./component/orderSummary";
import DoneSummary from "./component/Summary"

function App(){

    return(
      <Router>
        <div>
          <Navbar/>
            <Switch>
              <Route path="/" exact component={Order}/>
              <Route path="/addDish" component={CreateDish}/>
              <Route path="/orderSummary" component={OrderStatus} />
              <Route path="/summary" component={DoneSummary}/>
            </Switch>
          </div>
      </Router>
    )

}

export default App;
