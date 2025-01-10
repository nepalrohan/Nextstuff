import Slug from '@/components/Slug'

 const SlugRoute = async ({params}) =>{

const res = await fetch(`${process.env.SERVER}/api/blog/${params.slug}`)
let data = null;
if(!res.ok){
    data = []
}
 data = await res.json();
    return <Slug title={params.slug} data={data} />
}



export default SlugRoute;





export const generateStaticParams = async () => {

   const res = await  fetch(`${process.env.SERVER}/api/blog/slug-list`)
   let data = [];
   if(!data.ok){
    data =[]
   }
     data = await res.json();
    return data.map((slug)=>({slug:slug}))

}