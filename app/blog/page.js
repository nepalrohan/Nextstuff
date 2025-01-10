import Blog from "@/components/Blog"

export const metadata = {
  title:"Blog"
}
export const revalidate = 86400;

const BlogRoute = async () => {


  const blog = await fetch(`http://localhost:3000/api/blog`);

  const data = await blog.json();
  return  <Blog  data={data} />
  
}



export default BlogRoute