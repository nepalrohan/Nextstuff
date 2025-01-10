import React from 'react'
import {Card} from 'antd'


const Blog = ({data}) => {
  return (
    <div className='space-y-8'>


{
  data.map((item, index)=>{
    return <Card key={index} hoverable>
<h1 className='capitalize  text-lg '>{item.title}</h1>
    </Card>
  })
}


    </div>
  )
}

export default Blog