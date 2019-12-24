import React, {useState, useEffect} from "react";

function Summary(){

  const [doneOrder, setDoneOrder] = useState([]);

  useEffect(()=>{
    getOrderDoneSummary();
  }, []);


  const getOrderDoneSummary = async () =>{
    const request = await fetch('/api/kitchen/doneSummary');
    const result = await request.json();
    console.log("result", result);
    setDoneOrder(result);
    console.log(doneOrder);
  }


  return(
    <div>
      <h1>Order Done Summary Here</h1>

      <div className="container">
      <table className="table table-bordered">

      <thead className="thead-dark">
        <tr>
          <th >Dishname</th>
          <th >Created Till Now</th>
        </tr>
      </thead>

        {
          doneOrder.map(done=>(
            <tbody>
            <tr key={done._id}>
            <td >{done._id}</td>
            <td >{done.quantity}</td>
            </tr>
          </tbody>
          ))
        }

      </table>
      </div>

    </div>
  )
}


export default Summary;
