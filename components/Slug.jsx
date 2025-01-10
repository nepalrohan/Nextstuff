
export const generateMetaData = ({params})=>{
    return {
        title:`Codinghub - Blog -`+params.slug
    }
}
const Slug = ({title, data}) =>{

    

    return <div>
<h1 className='text-xl capitalize '>{title.split("-").join(" ")}</h1>
<p className='text-sm'>{data.description}</p>
    </div>
}





export default Slug;