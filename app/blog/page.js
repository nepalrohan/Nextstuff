import Blog from "@/components/Blog"

export const metadata = {
  title:"Blog"
}
export const revalidate = 86400;

const BlogRoute = async () => {


  const blog = await fetch(`${process.env.SERVER}/api/blog`);
let data = [];
if(!blog.ok){
  data=[]
}
   data = await blog.json();
  return  <Blog  data={data} />
  
}



export default BlogRoute