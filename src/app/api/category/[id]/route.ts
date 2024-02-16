import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios';

const apiUrl = process.env.apiUrl;

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const {id} = params
    const url = new URL(req.url)
    try {
        const response = await axios.request({
            method: 'GET',
            url: `${apiUrl}/category/${id}`,
        });
        return Response.json({ ...response?.data }, { status: 200 })
    } catch (error) {
        return Response.json({ error }, { status: 500 })
    }
}
