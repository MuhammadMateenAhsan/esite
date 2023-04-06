import React, { useState } from 'react'

const Calculator = () => {
    
    const [result,setResult]=useState("")
    function btnFunction(value){
       setResult(result.concat(value))
    }
    // alert(result)
    const calculate=()=> {
       setResult(eval(result).toString())
      }
      const clear = () => {
        setResult("");
      }
  return (
    <div className='container'>
        <div className='mt-2 col-lg-12'>
                    <input value={result}  style={{width:"36%"}} type="text" name="" id="" />
                    </div>
        <table className='table col-lg-5 text-center border' >
            <tr>
                <td><button onClick={clear} className='btn btn-primary'>C</button></td>
                {/* <td><button onClick={clear} className='btn btn-primary'>C</button></td> */}
                <td><button className='btn btn-primary'>AC</button></td>
                <td><button onClick={()=>{btnFunction("*")}} className='btn btn-primary'>X</button></td>
                <td><button onClick={()=>{btnFunction("/")}} className='btn btn-primary'>/</button></td>
            </tr>
            <tr>
                <td><button onClick={()=>{btnFunction("1")}} className='btn btn-primary'>1</button></td>
                <td><button onClick={()=>{btnFunction("2")}} className='btn btn-primary'>2</button></td>
                <td><button onClick={()=>{btnFunction("3")}} className='btn btn-primary'>3</button></td>
                <td><button onClick={()=>{btnFunction("-")}} className='btn btn-primary'>-</button></td>
            </tr>
            <tr>
                <td><button onClick={()=>{btnFunction("4")}} className='btn btn-primary'>4</button></td>
                <td><button onClick={()=>{btnFunction("5")}} className='btn btn-primary'>5</button></td>
                <td><button onClick={()=>{btnFunction("6")}} className='btn btn-primary'>6</button></td>
                <td><button onClick={()=>{btnFunction("+")}} className='btn btn-primary'>+</button></td>
            </tr>
            <tr>
                <td><button onClick={()=>{btnFunction("7")}} className='btn btn-primary'>7</button></td>
                <td><button onClick={()=>{btnFunction("8")}} className='btn btn-primary'>8</button></td>
                <td><button onClick={()=>{btnFunction("9")}} className='btn btn-primary'>9</button></td>
                <td><button onClick={calculate} className='btn btn-primary'>=</button></td>
               
            </tr>
            <tr>
            <button  style={{width:"400%"}} onClick={()=>{btnFunction("0")}} className='btn btn-primary'>0</button>
            </tr>
        </table>
    </div>
  )
}

export default Calculator