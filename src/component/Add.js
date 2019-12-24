import React, {useState} from "react";

function Add(){
const [items, setItems] = useState("");


const updateAddIem=e=>{
  setItems(e.target.value);
}

const addItem =async e =>{
  e.preventDefault();
  const obj = {
    dishname: items
  }
  console.log(obj)
  const request = await fetch('api/kitchen/addDish', {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(obj)
  });
  const check = await request.text()
  console.log({responseToPost: check});

}
  return(
    <div>
      <h1>Adding Dish Here In List</h1>
      <div className="container">
      <form className="container" onSubmit={addItem}>
        <div className="form-group">
          <label>Add Dish</label>
          <input type="text" className="form-control" value={items} onChange={updateAddIem}/>
        </div>
          <button className="btn btn-primary">Add Dish</button>
      </form>
      </div>

    </div>
  )
}


export default Add;
