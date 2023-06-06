import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function EditUser() {

    let navigate=useNavigate();
    const {id}=useParams();

    const [user,setUser]=useState({
        name:"",
        username:"",
        email:""
    })
    const{name,username,email}=user

    const onInputChnage=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
     }

    useEffect(()=>{
    
        loadUser()
    },[])

    const loadUser=async ()=>
    {
        
        const result=await axios.get(`http://localhost:8080/User/GetUser/${id}`)
        setUser(result.data);
    }
    async function preventForm(e)
    {
        e.preventDefault();
        await axios.put(`http://localhost:8080/User/Update/${id}`,user)
        navigate("/")
    }
     

  return (
<div class="container mt-5">
  <div class="row justify-content-center">
    <div class="col-lg-6">
      <div class="shadow p-4">
        <form onSubmit={preventForm}>
          <h2 class="mb-4">Edit User</h2>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control form-control-sm" name="name" value={name} placeholder="Enter name"
            onChange={(e)=>onInputChnage(e)} />
          </div>
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control form-control-sm" name="username" value={username} placeholder="Enter username"
             onChange={(e)=>onInputChnage(e)}/>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control form-control-sm" name="email" value={email} placeholder="Enter email"
             onChange={(e)=>onInputChnage(e)}/>
          </div>
          <br/>
          <button class="btn btn-primary" type="submit">Submit</button>
          <Link class="btn btn-danger mx-2" to={"/"}>Cancle</Link>
        </form>
      </div>
    </div>
  </div>
</div>




  )
}
