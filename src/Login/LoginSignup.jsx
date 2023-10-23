import React, { useState } from 'react';
import user_icon from './user_icon.png'
import email_icon from './email_icon.png'
import password_icon from './password_icon.png'
import './LoginSignup.css'

export default function LoginSignup() {

    const [action, setAction] = useState("Sign Up");
    
    return (
    <div className='container1'> 
      <div className='header'>
          <div className='text'> {action} </div>  
          <div className='underline'></div>
      </div>

        <div className='inputs'>
            {action==="Login"?<div></div>:<div className='input'>
                <img src={user_icon} alt='user_icon' className='icon'/>
                <input type='text' placeholder='Username'/>
            </div>}
            <div className='input'>
                <img src={email_icon} alt='email_icon' className='icon'/>
                <input type='email' placeholder='Email'/>
            </div>
            <div className='input'>
                <img src={password_icon} alt='password_icon' className='icon'/>
                <input type='password' placeholder='Password'/>
            </div>
            {action==="Login"?<div></div>:<div className='input'>
                <img src={password_icon} alt='password_icon' className='icon'/>
                <input type='password' placeholder='Confirm Password'/>
            </div>}

            {action==="SignUp"?<div></div>:<div className='forgot-password'>Lost Password? <span>Click Here!</span> </div>}  

            <div className='sumbit_container'>
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up </div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login </div>
                
                </div>             
        </div>



    </div>
  )
}
