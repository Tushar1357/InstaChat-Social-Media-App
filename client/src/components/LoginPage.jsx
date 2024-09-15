import React from "react";
import { useDispatch } from "react-redux";
import { Form, useNavigate } from "react-router-dom";
import { loggedInActions } from "../store/loggedin";


function LoginPage() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submitData = (e)=>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    fetch('http://localhost:3000/signin/login',{
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({email: email, password: password}),
      method: 'POST',
      credentials: 'include'
    }).then(res => res.json()).then(result => {
      if (result.status){
        dispatch(loggedInActions.changeState(true));
        navigate('/home');
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
            Sign In
          </h1>

          <label>Email</label>
          <div className="form-floating">
            <input
              type="email"
              className="form-control bg-dark text-white"
              name="email"
              
            />
          </div>
          <label>Password</label>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control bg-dark text-white"
              name="password"
            />
          </div>

          <button className="btn btn-primary w-100 py-2 mt-3" type="submit">
            Sign in
          </button>
        </Form>
      </main>
    </div>
  );
}

export default LoginPage;
