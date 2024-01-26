
import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signup } from '../Redux/Action'

const Signup = () => {

      let [username,setUsername]=useState("")
      let [email,setEmail]=useState("")
      let [password,setPassword]=useState("")

      let dispatch = useDispatch()
      const handlesignup = async(userdata)=>{
// console.log(userdata);
        let user = await axios.post('http://localhost:8090/user',userdata)
        console.log(user)
        dispatch(signup(user.data))
      }

      const handlesubmit=(e)=>{
        e.preventDefault();
        let user ={
          usename: username,
          email: email,
          password: password
        }
        handlesignup(user);
        alert("Signup successful")
      }

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input type="text" placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)} />
        <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <input type="submit"  />
      </form>
    </div>
  )
}

export default Signup