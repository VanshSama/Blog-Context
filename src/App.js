import React, { useContext, useEffect, useState } from 'react'
import Paginition from './Components/Pagination'
import Blogs from './Components/Blogs'
import Header from './Components/Header'
import { AppContext } from './Context/AppContext'

export const App = () => {
  const {fetchBlogPosts} = useContext(AppContext);
  // console.log(fetchBlogPosts);

  useEffect(() => {
    fetchBlogPosts();
  },[]);

  return (
    <div className='w-full h-full flex flex-col gap-y-4 justify-center items-center'>
      <Header />

      <Blogs />

      <Paginition />
    </div>
  )
}

export default App