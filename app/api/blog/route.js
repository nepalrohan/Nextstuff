import {NextResponse as res} from "next/server"
import {db} from '@/lib/db'
import Blog from '@/schema/blog.schema'

export const POST = async (request)=>{
db();
try{

    const body =  await request.json();
const blog = new Blog(body)
 await blog.save();

 return res.json(
  
    blog
 )


}catch(error){
    return res.json({
        status:500
    },{
        success:false,
        message:error.message
    })
}

}







export const GET = async (request)=>{
db();
    try{
    
       const blogs = await  Blog.find().sort({createdAt:-1});

    
     return res.json(
       
        blogs
     )
    
    
    }catch(error){
        return res.json({
            status:500
        },{
            success:false,
            message:error.message
        })
    }
    
    }


    