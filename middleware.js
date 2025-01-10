import { NextResponse as res} from 'next/server'


export const config = {
    matcher:'/admin/:path*'
}

const SEVENDAY= (7*24*60*60);

export const middleware = async (request) =>{

    const cookies = request.cookies.get('accessToken');
    if(!cookies){
        return res.redirect(new URL('/login', request.url))
    }

    const api = await fetch (`${process.env.SERVER}/api/session`, {
        method:"POST",
        body:JSON.stringify({token:cookies.value}),
        headers:{
            'Content-Type':'application/json'
        }

    })


    if(!api.ok){
        return res.redirect(new URL('/login', request.url))
    }

    const body = await api.json()
    const result =  res.next();

    result.cookies.set("session", JSON.stringify(body, {maxAge:SEVENDAY}))
    return result;

}