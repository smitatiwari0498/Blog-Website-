import React from 'react'
import { useDispatch } from 'react-redux'
// Sirf auth.js se import karein
import authService from '../../appwrite/auth.js' 
// authSlice se logout action import karna na bhoolein
import { logout } from '../../store/authSlice' 

const LogoutBtn = () => {
  const dispatch = useDispatch()
   
  const logoutHandler = () => {
    authService.logout().then(() => {
        dispatch(logout());
    })
  }

  return (
    <div className="flex items-center">
      <button 
        onClick={logoutHandler} 
        className="inline-block px-4 py-2 text-sm font-medium text-stone-600 hover:text-rose-700 hover:bg-stone-200/60 rounded-full transition-all duration-200 ease-in-out"
      >
        Logout
      </button>
    </div>
  )
}

export default LogoutBtn