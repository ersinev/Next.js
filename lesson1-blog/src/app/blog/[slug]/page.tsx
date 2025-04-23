import React from 'react'

interface BlogDetailsProps{
    params:{
        slug:string;
    }
}

function BlogDetails({params}:BlogDetailsProps) {
  return (
    <div>BlogDetails {params.slug}</div>
  )
}

export default BlogDetails