import React, {useState, useEffect} from "react";

function OrderSummary(){

  const [orders, setOrders] = useState([])

  useEffect(()=>{
    getOrder();
  }, [])


  const getOrder = async () =>{
    const response = await fetch('/api/kitchen/orderBookingSummary');
    const result = await response.json();
    setOrders(result)
  }



  const createdTillNow = async (item)=>{


    const obj = {
      itemId : item.itemId,
      dishname: item.dishname,
      quantity: item.quantity
    }

    console.log(obj)

    const request = await fetch('api/kitchen/summary', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(obj)
    });
    const check = await request.json()
    console.log({responseToPost: check});
  }



  return(
  <div className="container">
    <table>

    {orders.map(({_id, orderDetails, created_at}, i) => (
              <tbody className="table">
                <tr key={i}>
                  <th classNam="row">{_id} - {created_at}</th>
                </tr>

                <thead>
                <tr>
                <th className="col">Dishname</th>
                <th className="col">Quantity</th>
                <th className="col">Status</th>
                </tr>
                </thead>
                {
                  orderDetails.map((itemDetail, j) =>
                  <tr key={j}>
                    <td>{itemDetail.dishname}</td>
                    <td>{itemDetail.quantity}</td>
                    <td><button onClick={()=>createdTillNow(itemDetail, j)} className="btn btn-primary">Done</button></td>
                  </tr>
                 )
               }
            </tbody>
          ))
        }

      </table>
    </div>
  )
}


export default OrderSummary;
