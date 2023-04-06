import React from 'react'

function Cart(props) {
  
  const {cartItem}=props
  const {fullydelete}=props
  const {addToCart}=props
  const {handleUpdate}=props
  const {delFromCart}=props
  const Price= cartItem.reduce((a,c)=>a+(c.qty*c.price),0)
  const Shipment_Charges= 0;
  const ship= Price>=50?0:Shipment_Charges;
  const total= ship+Price;
  
  return (
    <div>
    <h2 className='text-center display-4'>Products</h2>
      <table className='table table-bordered mt-3 table-responsive'>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
          <th>Remove</th>
          <th>qty</th>
          <th>Add</th>
          <th>Image</th>
          <th>Update</th>
          <th>Delete</th>
          
        </tr>
        {
          cartItem.map((item)=>(
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td><button className='btn btn-primary' onClick={()=>delFromCart(item)}>-</button></td>
          <td>{item.qty}</td>
          <td><button onClick={()=>addToCart(item)} className='btn btn-primary'>+</button></td>
              <td><img src={item.image} height={"60px"} width={"60px"} alt="" /> </td>
             <td> <button onClick={() => handleUpdate(item)} className='btn btn-primary'>Update</button></td>
             <td> <button onClick={()=>fullydelete(item.id)} className='btn btn-danger'>Delete</button></td>
            </tr>
          ))
        }
      </table>
      <br/>
        <br/>
        <br/>
       <p> Price is {Price}</p>
        <p>Shipment charges= {ship}</p>
        <p>Total charges are ={total}</p>
    </div>
  )
}

export default Cart
