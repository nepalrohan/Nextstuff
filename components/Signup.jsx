"use client"
import React from 'react'
import Link from 'next/link'
import {Card, Button,Input,  Form, message} from 'antd';
import axios from 'axios';
import { useRouter } from 'next/navigation';
const Signup = () => {

const router = useRouter()

const signup = async (values)=>{


  try {
    

      await axios.post('/api/signup', values, {
        'Content-Type':'application/json'
      })

      router.push('/login');


  } catch (error) {
    message.error(error.response.data.message || error.message)
  }
}
  return (
    <div style={{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'rgb(241 245 249)',
      height:'100vh',
      width:'full'
    }} >

  <Card hoverable className='w-6/12'>

<h1 className='text-2xl text-center font-semibold mb-4'>Register </h1>
<Form layout='vertical'  onFinish={signup}>


<Form.Item 
label="Fullname"
name="fullname"
rules={[{required:true}]}
>
<Input size='large' placeholder='example123'  />
  </Form.Item>

  
<Form.Item 
label="Email"
name="email"
rules={[{required:true}]}
>
<Input size='large' type='email' placeholder='example@gmail.com'  />
  </Form.Item>

  
<Form.Item 
label="Password"
name="password"
rules={[{required:true}]}
>
<Input size='large' type='password' placeholder='********'  />
  </Form.Item>

<Form.Item style={{
  display:'flex',
  justifyContent:'center'
}}>
  <Button size='large' htmlType='submit' type='primary'>Signup</Button>
</Form.Item>

  </Form>

  <div className='flex items-center  justify-center gap-2 '>
<label>Already have an account?</label>
<Link href="/login"  className='text-blue-600 font-medium '>Login</Link>
</div>
  </Card>


    </div>
  )
}

export default Signup