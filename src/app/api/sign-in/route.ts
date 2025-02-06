import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export const POST = async (request:Request) =>{
    const payload = await request.json()
    const res = await fetch('http://localhost:8000/signIn',
        { 
            method: 'POST',
            headers : {'Content-Type' : 'application/json'},
            cache: 'no-store',
            body: JSON.stringify({...payload})
        })
    const data = await res.json()
    const  cookieStore = cookies()
    cookieStore.set('accessToken',data.accessToken, {
        httpOnly: true
    })



    return NextResponse.json({
        data: true
    })
}