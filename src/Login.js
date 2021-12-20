import React from 'react'
import './Login.css'
import { loginUrl } from './spotify'
function Login() {
  return (
    <div className='login'>
      <h1> I am thee </h1>
      <img
        src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
        alt=''
      />
      {/* Spotify Logo */}
      {/* Login with spotiify button*/}
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login
