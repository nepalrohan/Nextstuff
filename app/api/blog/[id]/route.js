import Blog from "@/schema/blog.schema";
import {NextResponse as res} from "next/server";
import {db} from '@/lib/db'
import mongoose from 'mongoose';





const isId = (id) => {
    return mongoose.Types.OnjectId.isValid(id)
}


export const PUT = async (request, {params}) =>{
    db();
    try{
        const body = await request.json();
        const blog =  await Blog.findByIdAndUpdate(params.id, body, {new:true});
        if(!blog){
          return res.json({
              success:false, message:"No blog found"
          },{
              status:404
          })
        }
  
        return res.json(blog)
      }
      catch(error){
          return res.json({
              success:false, message:error.message
          }, {
              status:500
          })
      }
}


export const DELETE =async (request, {params})=>{
db();
    try{
const id = await params.id;
      const blog =  await Blog.findByIdAndDelete(id);
      if(!blog){
        return res.json({
            success:false, message:"No blog found"
        },{
            status:404
        })
      }

      return res.json(blog)
    }
    catch(error){
        return res.json({
            success:false, message:error.message
        }, {
            status:500
        })
    }
}






export const GET =async (request, {params})=>{
    db();
    try{
        
        const id = isId(params.id);
        const query = ( id ? {_id:params.id}:{title:params.id.split('-').join(" ")})
        const blog =  await Blog.findById(query);
        if(!blog){
          return res.json({
              success:false, message:"No blog found"
          },{
              status:404
          })
        }
  
        return res.json(blog)
      }
      catch(error){
          return res.json({
              success:false, message:error.message
          }, {
              status:500
          })
      }
}

