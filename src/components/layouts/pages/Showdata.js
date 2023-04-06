import React from 'react'

function Showdata(props) {
  
  const {mydata}=props
  const {dele}=props
  const {handleUpdate}=props
  
  return (
    <div>
    <h2 className='text-center display-4'>Products</h2>
      <table className='table table-bordered mt-3 table-responsive'>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
          <th>Image</th>
          <th>Update</th>
          <th>Delete</th>
          
        </tr>
        {
          mydata.map((item)=>(
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td><img src={item.image} height={"60px"} width={"60px"} alt="" /> </td>
             <td> <button onClick={() => handleUpdate(item)} className='btn btn-primary'>Update</button></td>
             <td> <button onClick={()=>dele(item.id)} className='btn btn-danger'>Delete</button></td>
            </tr>
          ))
        }
      </table>
    </div>
  )
}

export default Showdata
