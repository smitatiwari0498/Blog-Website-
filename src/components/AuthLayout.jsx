import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({ children, authentication = true }) {
 
 
  const navigate = useNavigate()
  const [loader, setLoader] = useState(true)
  
  // Redux se status get 
  const authStatus = useSelector(state => state.auth.status)

  useEffect(() => {
    // Case 1: Route ko auth chahiye (authentication=true) aur user logged in nahi hai
    if (authentication && authStatus !== authentication) {
      navigate("/login")
    } 
    // Case 2: Route public hai (authentication=false) aur user already logged in hai
    // Example: Login ya Signup page par logged-in user ko nahi rehna chahiye
    else if (!authentication && authStatus !== authentication) {
      navigate("/")
    }
    
    setLoader(false)
  }, [authStatus, navigate, authentication])

  // Loader check zaroori hai taaki redirect hone se pehle content flash na ho
  return loader ? <h1>Loading...</h1> : <>{children}</>
}


/* 

Notes: Unauthorized users ko private pages (dashboard, profile) se bahar rakhna aur logged-in users ko login/signup pages par jaane se rokna.

*/


