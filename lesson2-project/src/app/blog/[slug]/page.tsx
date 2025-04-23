import React from 'react'

interface BlogDetailProps{
    params:{
        slug:string;
    }
}



function BlogDetailPage({params}:BlogDetailProps) {
  console.log(params.slug)
  return (
    <div className='p-4 text-lg text-teal-800'>
        <h2>BlogDetailPage</h2> 
        <div className='bg-amber-400 p-4 w-50'>{params.slug}</div>
    </div>
  )
}

export default BlogDetailPage