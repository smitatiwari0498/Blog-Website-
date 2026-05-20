import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

const PostCard = ({ $id, title, featuredImage }) => {
  return (
    <Link to={`/post/${$id}`} className="block group">
      <div className="w-full bg-stone-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 border border-stone-200/60 flex flex-col h-full">
        
        <div className="w-full aspect-[16/10] overflow-hidden bg-stone-100 relative">
          <img 
            src={appwriteService.getFilePreview(featuredImage)} 
            alt={title}
            className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-rose-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-6 flex flex-col flex-grow justify-between">
          <div>
            <h2 className="text-xl font-serif font-medium text-stone-900 group-hover:text-rose-700 transition-colors duration-300 line-clamp-2 leading-relaxed">
              {title}
            </h2>
          </div>
          
          <div className="mt-5 flex items-center text-sm font-medium text-amber-700 group-hover:text-amber-800 transition-colors duration-200">
            <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 group-hover:after:w-full after:bg-amber-700 after:transition-all after:duration-300">
              Read Story
            </span>
            <svg 
              className="w-3.5 h-3.5 ml-1.5 transform group-hover:translate-x-1 transition-transform duration-300 ease-out text-amber-600" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>

      </div>
    </Link>
  )
}

export default PostCard