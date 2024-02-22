import { useState } from "react";
import axios from "axios";

const BASE_URL = 'https://fsa-jwt-practice.herokuapp.com/signup'
export default function SignUpForm() {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const payLoad = {
    username,
    password
  }

  async function fetchUserAuth() {
    const response = await axios.get(BASE_URL)
    console.log(response)
    
  }

  async function createUser(){
    const response = await axios.post(BASE_URL, {
      headers: { 
        "Content-Type": "application/json" 
      },
      body: payLoad
    })
    console.log(response)
  }
    
  async function handleSubmit(event) {
    event.preventDefault();

    try {
      createUser()
    } catch (error) {
      setError(error.message)
    }
  }



  
  return (
    <>
  <div className="card">
  <h2>Sign Up!</h2>
  {error && (<p>{error}</p>)}
  <form className="signup-form" onSubmit={handleSubmit}>
  <label> Username: <input value={username} onChange={(e) => setUserName(e.target.value)}/></label>
  <label> Password: <input value={password} onChange={(e) => setPassword(e.target.value)} /></label>
  <button className="submit-button">Submit</button>
  </form>
  </div>
</>
  );
}