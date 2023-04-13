import React, { useContext, useState } from 'react';
import { mycontext } from './Context';
import './login.css'
 
 const Login = () => {

  const {setLoggedIn}  = useContext(mycontext);
  const [data,setData] = useState({
    name :"",
    password:"",
  })



  const handle = ()=>{
    if((data.name=== "admin" && data.password==="admin123")){
      setLoggedIn(true)
    }else{
      alert("Enter Proper Credential")
    }
  }
   return (
     <div className='logmain'>
       <h3> Welcome To Login Form</h3>
       <div>
        <br />
        <input style={{padding:"10px" ,width:"300px"}} type="text" placeholder='User Name' onChange={(e)=>{
          setData({
            ...data,
            name: e.target.value,
          })
        }} />
       </div>
       <div>
        <br />
        <  input style={{padding:"10px" ,width:"300px"}} type="password" placeholder='Password'  onChange={(e)=>{
          setData({
            ...data,
            password:e.target.value,
          })
        }} />
       </div>
       <div>
        <br />
        <button style={{padding:"10px",width:"150px",fontSize:"20px"}} onClick={handle}>Login</button>
       </div>

     </div>
   );
 }
 
 export default Login;