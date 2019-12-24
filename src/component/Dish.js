import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";



function Dish(){

const [dishList, setdishList] = useState([]);
const [cart, setCart] = useState([]);
const [count, setCount] = useState(1);

  useEffect(()=>{
    getDish();
  }, []);

  const getDish=async ()=>{
    const response = await fetch('/api/kitchen/dish');
    const data = await response.json();
    setdishList(data);
  }

//count + and -
const handleclick = (itemId, value)=>{
    for (var i = 0; i < cart.length; i++) {
      if(cart[i].itemId == itemId) {
        cart[i].quantity += value;
      }
    }

    setCount(count+1);
    console.log(count);
  }


//for adding in cart
  const addtoCart = (item) =>{

    if(cart.find(ele => ele.itemId == item._id)) {
      return handleclick(item._id, 1);
    }
    let objectitem = {
      itemId: item._id,
      dishname: item.dishname,
      quantity: 1
    }
    setCart([...cart, objectitem]);
  }

  const booking = async (e)=>{
    const request = await fetch('api/kitchen/orderBooking', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(cart)
    });
    const check = await request.json()
    console.log({responseToPost: check});

  }


//for remove from Cart
const removecart = (index) =>{
  cart.splice(index, 1);
  setCart([...cart])
  console.log("after remove", cart)
}

const cartEmpty = cart.length===0;

  return(
    <div className="container">
    <div className="row">
    <div className="col" >
    <h1 className="sub-header">Dish List</h1>
    <table className="table table-striped">
      <thead>
      <tr>
        <th>Dish Name</th>
      </tr>
      </thead>
      {dishList.map((list, index)=>(

      <tbody>
        <tr key={index}>
        <td className="dishname">{list.dishname}</td>
          <td><button className="btn btn-primary" onClick={()=>addtoCart(list)} >Add</button></td>

        </tr>

      </tbody>
      ))}
      </table>
      </div>

      {cartEmpty?(<h1 className="sub-header">Cart is Empty</h1>):(

      <div className= "col">
      <h1>Cart</h1>
      <table className="table table-striped">
        <thead>
        <tr>
          <th >Dish Name</th>
          <th >Quantity</th>
        </tr>
        </thead>


        {cart.map((itemOne, index)=>(

        <tbody>
          <tr key={index}>
          <td className="dishname" >{itemOne.dishname}</td>
          <td><button onClick={()=>handleclick(itemOne.itemId, -1)}>-</button></td>
          <td><p >{itemOne.quantity}</p></td>
          <td><button onClick={()=>handleclick(itemOne.itemId, 1)}>+</button></td>
          <td><button className="btn btn-primary" onClick={()=> removecart(index, 1)}>remove</button></td>
          </tr>
        </tbody>
      ))}

        </table>
        <button onClick={booking}>Order</button>

        </div>
        )}
    </div>
    </div>
  )
}


export default Dish;
