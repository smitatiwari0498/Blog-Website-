import React, { useEffect, useState } from 'react'
import { Container, PostCard } from '../components/index'
import appwriteService from "../appwrite/config"

const AllPost = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    appwriteService.getPost([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents)
      }
    })
  }, [])   

  return (
    <div className='w-full py-12 bg-stone-50/30 min-h-[80vh]'>
      <Container>
        {posts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-stone-200/60 shadow-sm">
            <p className="text-stone-500 font-serif text-lg">No articles discovered yet.</p>
          </div>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {posts.map((post) => (
              <div key={post.$id} className='h-full'>
                <PostCard {...post} /> 
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  )
}

export default AllPost