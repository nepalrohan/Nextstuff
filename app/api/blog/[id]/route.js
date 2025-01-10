import Blog from "@/schema/blog.schema";
import {NextResponse as res} from "next/server";
import {db} from '@/lib/db'



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
        const id = await params.id;
        const blog =  await Blog.findById(id);
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