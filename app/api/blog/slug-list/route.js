import {NextResponse as res} from "next/server";
import Blog from '@/schema/blog.schema'

import {db} from '@/lib/db'

export const GET =async (req)=>{
    db();

 const titles = await Blog.distinct('title');
 const slugs = titles.map((item)=>item.split(" ").join("-"))
return res.json(titles)



}