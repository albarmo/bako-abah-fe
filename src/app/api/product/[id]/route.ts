import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios';

const apiUrl = process.env.apiUrl;

export async function GET(req: Request, res: NextResponse) {
    const url = new URL(req.url)
    try {
        const response = await axios.request({
            method: 'GET',
            url: `${apiUrl}/product/e0413ab2-633b-4c8e-b98e-920519caf3de`,
        });
        return Response.json({ ...response?.data }, { status: 200 })
    } catch (error) {
        return Response.json({ error }, { status: 500 })
    }
}
