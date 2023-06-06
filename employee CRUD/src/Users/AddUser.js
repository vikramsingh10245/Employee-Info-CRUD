import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

export default function AddUser() {

    let navigate=useNavigate();

    const [user,setUser]=useState({
        name:"",
        username:"",
        email:""
    })
    const{name,username,email}=user

    const onInputChnage=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
     }//n summary, this code is used to update the user state object with new values when 
    // an input field changes, by calling the setUser function and passing it a new object that 
    // copies all the existing properties of the user object and dynamically updates the property 
    // that corresponds to the input field that changed.

    // const onSubmit=(e)=>{
    //     e.preventDefault()
    // }
    function preventForm(e)
    {
        e.preventDefault();
        axios.post("http://localhost:8080/User/Add",user)
        navigate("/") //url of home page
    }
    // the default behavior is for the page to reload and the
    //  form data to be sent to the server. If you attach an event handler
    //   to the form submission event and call preventDefault(), it will 
    //   prevent the form from being submitted and the page from reloading.

  return (
<div class="container mt-5">
  <div class="row justify-content-center">
    <div class="col-lg-6">
      <div class="shadow p-4">
        <form onSubmit={preventForm}>
          <h2 class="mb-4">Add User</h2>
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
