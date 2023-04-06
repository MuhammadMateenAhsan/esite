import React, { useState } from 'react'
// import { Navigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'
const Filterproducts = (props) => {
  const {mydata} = props
  const {newfilterdata} = props
  const {addToCart}=props
  const [filteredData, setFilteredData] = useState(mydata)
  

  const filters = (event) => {
    const name = event.target.name.toLowerCase()
    const filtered = mydata.filter(item => item.name.toLowerCase().includes(name))
    setFilteredData(filtered)
  }

  return (
    <div>
      <div className='col-lg-10 ml-5 ml-5  text-center d-flex justify-content-between'>
        <button className='btn btn-info' name='football' onClick={filters}>Football</button>
        <button className='btn btn-info' name='dress shirts' onClick={filters}>Dress Shirts</button>
        <button className='btn btn-info' name='mobiles' onClick={filters}>Mobiles</button>
      </div>
      <div>
        <h2 className='text-center display-4'>Filter Products</h2>
        <table className='table table-bordered mt-3 table-responsive' style={{overflow: 'hidden'}}>
          {/* <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Image</th>
          </tr> */}
          {
            filteredData.map((item) => (
                <div class="col-md-3 mt-2" id='maindiv'>
                <div class="card">
                                    <div class="card-body">
                                        <div class="card-img-actions" >
                                            
                                                <img src={item.image} class="card-img img-fluid" alt=""style={{height:"120px"}}/>
                                              
                                           
                                        </div>
                                    </div>

                                    <div class="card-body bg-light text-center">
                                        <div class="mb-2">
                                            <h6 class="font-weight-semibold mb-2">
                                                <a href="#" class="text-default mb-2" data-abc="true">{item.name}</a>
                                            </h6>
                                            <p>{item.description}</p>
                                        </div>

                                        <h3 class="mb-0 font-weight-semibold">${item.price}</h3>

                                        <div>
                                           <i class="fa fa-star star"></i>
                                           <i class="fa fa-star star"></i>
                                           <i class="fa fa-star star"></i>
                                           <i class="fa fa-star star"></i>
                                        </div>

                                        <div class="text-muted">34 reviews</div>

                                        <button type="button" onClick={()=>addToCart(item)} class="btn bg-cart"><i class="fa fa-cart-plus mr-2 "></i>Add to cart</button>

                                        
                                    </div>
                                </div>           
           </div> 
              // </tr>
            ))
          }
        </table>
      </div>
    </div>
  )
}

export default Filterproducts
