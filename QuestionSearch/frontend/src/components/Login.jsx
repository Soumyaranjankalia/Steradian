import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem("user");
        if(auth){
            navigate("/")
        }
    }, [])

    const handelLogin = async () => {
        let result = await fetch("http://localhost:5000/login", {
            method:"post",
            body:JSON.stringify({email, password}),
            headers:{
                'Content-Type' : 'application/json'
            }
        });
        result = await result.json();
        console.log(result)
        if(result.name){
            localStorage.setItem("user", JSON.stringify(result));
            alert("Login Successful")
            navigate("/")
        }else{
            alert("Please enter correct details")
        }
    }

  return (
    <div className='login'>
        <h1>Login</h1>
        <input type="text" className='inputBox' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email' />
        <input type="password" className='inputBox' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password' />
        <button className='appButton' onClick={handelLogin} >Login</button>
    </div>
  )
}
