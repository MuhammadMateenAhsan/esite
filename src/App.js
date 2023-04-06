import logo from './logo.svg';
import './App.css';
import Navbar from './components/layouts/navbar/Navbar';
import Footer from './components/layouts/footer/Footer';
import Addproduct from './components/layouts/pages/Addproduct';
import Userdata from './components/layouts/pages/Showdata';
import { useEffect, useState } from 'react';
import Filterproducts from './components/layouts/pages/Filterproducts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './components/layouts/pages/Cart';
import Showdata from './components/layouts/pages/Showdata';
import TodoList from './components/layouts/pages/TodoList';
import Calculator from './components/layouts/pages/Calculator';

function App() {
  const myApi=[
    {
      id:"1",
      name:"mobiles",
      price:20,
      description:"loremloremloremloremloremlorem",
      image:"logo192.png"
    },
    {
      id:"2",
      name:"Mobiles",
      price:40,
      description:"loremloremloremloremloremlorem",
      image:"logo512.png"
    },
    {
      id:"3",
      name:"Dress Shirts",
      price:60,
      description:"loremloremloremloremloremlorem",
      image:"logo192.png"
    },
    {
      id:"4",
      name:"football",
      price:60,
      description:"loremloremloremloremloremlorem",
      image:"logo192.png"
    },
    {
      "id": "10",
      "name": "mobiles",
      "description": `ASUS TUF Gaming 32 2K  `,
      "brand": "Asus",
      "price": "380",
      "category": "monitor",
      "image":"logo192.png"
  },
  {
    "id": 1,
    "name": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  }

  ]
     //state for handling the Api data
     const [data, setData] = useState(myApi);
     const [cartItem, setCartItem] = useState([]);
     const [counter, setCounter] = useState(0);

    //  line 3 for local storage
    // useEffect(() => {
    //   const items = JSON.parse(localStorage.getItem('cartItem')) || [];
    //   setCartItem(items);
    // }, []);
    // end line 3

function createData(product) {
  let newId = data.length + 1;
  while (data.find((item) => item.id === newId)) {
    newId++;
  }
  product.id = newId;
  setData([...data, product]);
 
}
 
     // deleteData function
     function deleteData(id){
       {
         setData(data.filter(item=>item.id !==id))
       }
     }

    //  delete from cart
    function fullydelete(id){
      {
        setCartItem(cartItem.filter(item=>item.id !==id))
        setCounter(counter-1)
      }
    }
     function filterProductsByName(name) {
      const filteredData = myApi.filter((item) => item.name.toLowerCase() === name.toLowerCase());
      setData(filteredData);
    }
    // addToCart function
    const addToCart=(product)=> {
      const exist=cartItem.find((x)=>x.id==product.id);
      if(exist){
        const updatedItems=cartItem.map((x)=>x.id==product.id
        ?{...exist,qty:exist.qty+1}:x)
        setCartItem(updatedItems);
        // line 1 for local storage
        localStorage.setItem('cartItems', JSON.stringify(updatedItems));
      }else{
        const newItems =[...cartItem,{...product, qty:1}]
        setCartItem(newItems);
        // line 2 for local storage
        localStorage.setItem('cartItems', JSON.stringify(newItems));
      }
      // alert("Product added to your card successfully")
      setCounter(counter+1)
    }

    // delFromCart
    const delFromCart=(product)=> {
      const exist=cartItem.find((x)=>x.id==product.id);
      
      if(exist.qty>1){
        
        setCartItem(cartItem.map((x)=>x.id==product.id
        ?{...exist,qty:exist.qty-1}:x))
        setCounter(counter-1)
      
      }else{
        setCartItem(cartItem.filter((x) => x.id !== product.id));
        setCounter(counter-1)
        return
      }
      // alert("Product deleted from your card successfully")
    }
    
  return (
    <div >
      <Router>
      <Navbar counter={counter}/>
      {/* <Addproduct createData={createData} /> */}
         <Routes>
          <Route path='/calculator' element={<Calculator/>}/>
          <Route path='/todolist' element={<TodoList/>}/>
          <Route path="/addproduct" element={<Addproduct addToCart={addToCart} createData={createData}/>} />
          <Route path='/showdata' element={<Showdata dele={deleteData} mydata={data}/>}/>

          <Route path="/cart" element={<Cart fullydelete={fullydelete} delFromCart={delFromCart} dele={deleteData} addToCart={addToCart} cartItem={cartItem}/>} />
          <Route path="/filterproducts" element={<Filterproducts mydata={data} filters={filterProductsByName} addToCart={addToCart}/>} />
          <Route path="/" element={<Filterproducts mydata={data} filters={filterProductsByName} addToCart={addToCart}/>} />

        </Routes>
      </Router>
      <Footer/>
      
    </div>
  );
}

export default App;
