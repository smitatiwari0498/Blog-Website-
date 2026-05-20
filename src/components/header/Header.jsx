import React from 'react'
import { Container, Logo, LogoutBtn } from '../index.js'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'

const Header = () => {
  // Auth status get karna hai user logged in hai ya nahi
  const authStatus = useSelector(state => state.auth.status)
  const navigate = useNavigate()
  const location = useLocation() // Current page highlight karne ke liye

  // Nav items array layout
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]

  return (
    // Header background: Warm Ivory/Cream (bg-stone-50/90) with blur effect on scroll
    <header className=' sticky top-0 z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200/60 shadow-sm'>
      <Container>
        <nav className='flex items-center justify-between'>
          
          {/* Logo Section */}
          <div className='flex items-center'>
            <Link to='/' className='flex items-center transform hover:opacity-90 transition-opacity'>
              <Logo width='120px' /> 
            </Link>
          </div>

          {/* Navigation Links */}
          <ul className='flex items-center space-x-2 sm:space-x-4 ml-auto'>
            {navItems.map((item) => {
              if (!item.active) return null;
              
              // Check active page route
              const isCurrentPage = location.pathname === item.slug;

              return (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className={`inline-block px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ease-in-out
                      ${isCurrentPage 
                        ? 'bg-rose-700 text-stone-50 shadow-sm' // Active Page Styling (Terracotta/Rose Gold)
                        : 'text-stone-700 hover:text-rose-700 hover:bg-stone-200/60' // Inactive state
                      }`}
                  >
                    {item.name}
                  </button>
                </li>
              );
            })}

            {/* Logout Button Section */}
            {authStatus && (
              <li className='pl-2 border-l border-stone-200/80'>
                <LogoutBtn />
              </li>
            )}
          </ul>

        </nav>
      </Container>
    </header>
  )
}

export default Header