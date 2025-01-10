
export const generateMetaData = ({params})=>{
    return {
        title:`Codinghub - Blog -`+params.slug
    }
}
const Slug = ({title}) =>{

    

    return <div>
<h1 className='text-xl capitalize '>{title.split("-").join(" ")}</h1>
    </div>
}

export default Slug;