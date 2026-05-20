import React from 'react'
import assets from '../../assets/assets.js' 

function Logo({ width = '180px' }) {
  return (
    <div className="flex items-center transition-transform duration-300 hover:scale-102">
      <img 
        src={assets.Logo} 
        alt="Website Logo" 
        style={{ width: width }}
        className="object-contain h-auto max-w-full"
      />
    </div>
  )
}

export default Logo;