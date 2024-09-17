import React from 'react'
import './CSS/Login.css'

const Login = () => {
  return (
    <div className='signup'>
      <div className="container">
        <h2>SIGNUP</h2>
        <div className="field">
          <p>Create an new account or LOGIN</p>
          <label for="name">Enter Your Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />

          <label for="email">Enter Your Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
        
          <label for="password">Create a Password</label>
          <input type="password" id="password" placeholder="Enter your password" required />

          <label for="password">Confirm Password</label>
          <input type="password" id="password" placeholder="Re-enter your password" required />
        </div>
        <div className="agree">
          <input type="checkbox" id="box" required/>
          <p>I agree the terms and conditions & privacy policy.</p>
        </div>
        <button>SIGNUP</button>
        <p className='login'>Already have an account? <span>LOGIN</span></p>
        
      </div>
    </div>
  )
}

export default Login
