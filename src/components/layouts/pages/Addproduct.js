import React, { useState } from 'react'

const Addproduct = (props) => {
  const empty={
    id:null,
    name:"",
    price:"",
    description:"",
    image:""
  }
// state for handling the input data
const [handle,setHandle]=useState(empty)
 const handler=(e)=>{
var {name,value}=e.target;
   setHandle({...handle,[name]:value});
    console.log(handle);
  }

  return (
    <div className='container col-lg-7 mt-3 mb-4'>
        <form onSubmit={(e)=>{
      e.preventDefault()
      props.createData(handle)
      setHandle(empty)
    }}>
  <div class="form-group">
    <h2 className='text-center display-4'>Add Products</h2>
    <label for="productName">Product Name:</label>
    <input type="text" class="form-control" required name="name" value={handle.name}  onChange={handler} placeholder="Enter product name"/>
  </div>
  <div class="form-group">
    <label for="productPrice">Price:</label>
    <input type="number" class="form-control" name="price" value={handle.price}  onChange={handler} placeholder="Enter price"/>
  </div>
  <div class="form-group">
    <label for="productDescription">Description:</label>
    <textarea type="text" class="form-control" required name="description" value={handle.description}  onChange={handler} rows="5" placeholder="Enter product description"></textarea>
  </div>
  <div class="form-group">
    <label for="productImage">Image:</label>
    <input
  type="file"
  class="form-control-file"
  name="image"
  onChange={(e) => {
    setHandle({ ...handle, image: URL.createObjectURL(e.target.files[0]) });
  }}
/>

  </div>
  <button type="submit" class="btn btn-primary">Add Product</button>
</form>

    </div>
  )
}

export default Addproduct