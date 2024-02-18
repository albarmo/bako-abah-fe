import { cookies } from 'next/headers'

export async function POST(req: Request) {
    try {
        cookies().delete('token')
        return Response.json({ msg:"OK" }, { status: 200 })
    } catch (error) {
        return Response.json({ error, req }, { status: 500 })
    }
}
