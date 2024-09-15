import React, { useRef } from "react";
import { useNavigate } from 'react-router';
import {Form} from 'react-router-dom'

function SignUp() {

  const navigate = useNavigate()

  const submitData = (e)=>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
    fetch('http://localhost:3000/register/signup',{
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({name: name,email: email, password: password}),
      method: 'POST',
    }).then(res => res.json()).then(result => {
      if (result.status){
        navigate('/login');
      }
      else{
        console.log(result.message)
      }
    })
  }

  return (
    <div className="container w-75 text-white">
      <main className="form-signin w-100 m-auto">
        <Form onSubmit={submitData}>
          <img
            className="mb-4"
            src="../../public/images/logo.png"
            alt=""
            width="57"
            height="57"
          />
          <h1 className="h3 mb-3 fw-normal text-decoration-underline">
            Sign Up
          </h1>


          <label className="mt-1">Name</label>
          <div className="form-floating">
            <input
              type="text"
              name="name"
              className="form-control bg-dark text-white"
            />
          </div>
          <label className="mt-1">Email</label>
          <div className="form-floating">
            <input
              type="email"
              name="email"
              className="form-control bg-dark text-white"
            />
          </div>
          <label className="mt-1">Password</label>
          <div className="form-floating">
            <input
              type="password"
              name="password"
              className="form-control bg-dark text-white"
            />
          </div>

          <button
            className="btn mt-3 mb-3 btn-primary w-100 py-2"
            type="submit"
          >
            Sign up
          </button>
        </Form>
      </main>
    </div>
  );
}

export default SignUp;
