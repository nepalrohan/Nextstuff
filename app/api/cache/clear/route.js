import {NextResponse as res} from 'next/server'
import {revalidatePath} from "next/cache";



export const POST = async (req)=>{
const body = await res.json();
const data = body.paths.map((item)=>{
    revalidatePath(item)
    return {
    path:item,
    deletedAt:Date.now(),
    }

})
}