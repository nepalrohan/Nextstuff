"use client"

import axios from "axios";
import React, { useState } from "react";
import useSWR from 'swr'
import { Form, Input, Button, message , Card} from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";


const fetcher = async (url)=>{
    try{
      const {data} =  await axios.get(url);
   
      return data;
    }
    catch(error){
throw new Error(error);
    }
}


const Admin = () => {


    const [currentEditId, setCurrentEditId] = useState(null);
  const [form] = Form.useForm();
    const { data=[], error } = useSWR('/api/blog', fetcher);

    if (!data && !error) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Failed to load blogs</div>;
    }
  const createBlog = async (values) => {
    try {
       await axios.post("/api/blog", values, {
        "Content-Type": "application/json",
      });

      await axios.post('/api/cache/clear', {paths:['/blog']})

      mutate('/api/blog');
      form.resetFields();

    } catch (error) {
      message.error(error.response.data.message || error.message);
    }
  };






const deleteBlog =async (id)=>{
try{

await axios.delete(`/api/blog/${id}`)
mutate('/api/blog');

}
catch(error){
  message.error(error.message)
}
}



const updateBlog = (item)=>{
  try{
  form.setFieldsValue(item);
    setCurrentEditId(item._id)

  }
  catch(error){
    message.error(error.message)
  }
  }
  



  
  const saveBlog = async (values)=>{

    try{
    await axios.put(`/api/blog/${currentEditId}`, values, {
      'Content-Type':'application/json'
    })
    mutate('/api/blog');

    form.resetFields();
    setCurrentEditId(null);
    }
    catch(error){
      message.error(error.message)
    }
    
  }

  return (
    <div className="flex  gap-5 flex-col md:grid md:grid-cols-12 md:gap-12 ">
      <div className="col-span-6">
        <h1 className="text-4xl font-bold mb-8">New Blog</h1>

        <Form layout="vertical" onFinish={currentEditId? saveBlog : createBlog} form ={form}>
          <Form.Item label="Title" name="title" rules={[{ required: true }]}>
            <Input size="large" placeholder="Enter blog title" />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true }]}
          >
            <Input.TextArea
              rows={10}
              size="large"
              placeholder="Enter blog description"
            />
          </Form.Item>
{

  currentEditId?  <Form.Item>
  <Button type="primary" htmlType="submit"  danger size="large">
    Save
  </Button>
</Form.Item>
:
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large">
              Create
            </Button>
          </Form.Item>

}

        
        </Form>
      </div>

      <div className="col-span-6 space-y-6">
        
                   
{


  

    data && data.map((item, index)=>{
        return <Card key={index} hoverable
        
actions ={[
<EditOutlined key='edit' onClick={()=>updateBlog(item._id)}  /> ,
 <DeleteOutlined  key='delete'  onClick={()=>deleteBlog(item._id)} />

]}

        >



            <h1 className='text-xl capitalize  font-semibold '>{item.title}</h1>

<p className='text-gray-500 text-sm'>{item.description.slice(0, 100)}</p>
        </Card>

    })
} 

        
      </div>
    </div>
  );
};

export default Admin;
