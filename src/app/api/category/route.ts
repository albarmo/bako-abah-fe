import {  NextResponse } from 'next/server'
import axios from 'axios';

const apiUrl = process.env.apiUrl;

export async function GET(req: Request, res: NextResponse) {
    ({ url: `${apiUrl}`})
    try {
        const response = await axios.request({
            method: 'GET',
            url: `${apiUrl}/category`,
        });
        return Response.json({ ...response?.data }, { status: 200 })
    } catch (error) {
        return Response.json({ error }, { status: 500 })
    }
}

