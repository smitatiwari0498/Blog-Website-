import React from 'react'
import { Container, PostForm } from '../components/index.js'

const AddPost = () => {
  return (
    <div className='py-12 bg-stone-50/30 min-h-[80vh]'>
      <Container>
        <PostForm />
      </Container>
    </div>
  )
}

export default AddPost