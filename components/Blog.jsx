import React from 'react'
import {Card} from 'antd'
import Link from 'next/link'

const Blog = ({data}) => {
  return (
    <div className='space-y-8'>


{
  data.map((item, index)=>{
    
    return <Link key={index} href={`/blog/${item.title.split(" ").join("-")}`}>
    <Card  hoverable>


<h1 className='capitalize  text-lg '>{item.title}</h1>
    </Card>
</Link>
  })
}


    </div>
  )
}

export default Blog