import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios';
import { cookies } from 'next/headers';

const apiUrl = process.env.apiUrl;

export async function GET(req: Request, res: NextResponse) {
    const url = new URL(req.url)
    const keyword = url.searchParams.get("keyword")
    const limit = url.searchParams.get("limit")
    const offset = url.searchParams.get("offset")
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

