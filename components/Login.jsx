"use client"
import React from 'react'
import Link from 'next/link'
import {Card, Button,Input,  Form, message} from 'antd';
import axios from 'axios';
import { useRouter } from 'next/navigation';
const Login = () => {
  const router = useRouter();
const login = async (values)=>{

  try {
    

    await axios.post('/api/login', values, {
      'Content-Type':'application/json'
    })

    router.push('/admin');


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

<h1 className='text-2xl text-center font-semibold mb-4'>Login </h1>
<Form layout='vertical'  onFinish={login}>




  
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
  <Button size='large' htmlType='submit' type='primary'>Login</Button>
</Form.Item>

  </Form>
<div className='flex items-center justify-center  '>
<label>Don't have an account?</label>
<Link href="/signup"  className='text-blue-600 font-medium ml-1'>Register</Link>
</div>
  </Card>


    </div>
  )
}

export default Login