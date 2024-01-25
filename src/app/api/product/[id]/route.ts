import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios';

const apiUrl = process.env.apiUrl;

export async function GET(req: Request, res: NextResponse) {
    const url = new URL(req.url)
    try {
        const response = await axios.request({
            method: 'GET',
            url: `${apiUrl}/product/8df8dade-3cea-4424-8cf5-e7e86f361ea0`,
        });
        return Response.json({ ...response?.data }, { status: 200 })
    } catch (error) {
        return Response.json({ error }, { status: 500 })
    }
}
