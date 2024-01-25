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
            url: `${apiUrl}/product`,
        });
        return Response.json({ ...response?.data }, { status: 200 })
    } catch (error) {
        return Response.json({ error }, { status: 500 })
    }
}



export async function POST(req: Request) {
    const token = cookies().get('token')?.value
    if (!token) {
        return Response.json({ code: '401', message: 'You are unauthorized' }, { status: 401 })
    }

    try {
        const formData = await req.formData()
        const response = await axios.request({
            method: 'POST',
            url: `${apiUrl}/products`,
            headers: {
                "content-type": "multipart/form-data",
                'access_token': token || ''
            },
            data: formData
        });

        return Response.json({ ...response?.data }, { status: 200 })
    } catch (error) {
        return Response.json({ error, req }, { status: 500 })
    }
}

export async function PUT(req: Request) {
    const id = ''
    const token = cookies().get('token')?.value
    if (!token) {
        return Response.json({ code: '401', message: 'You are unauthorized' }, { status: 401 })
    }

    try {
        const formData = await req.formData()
        const response = await axios.request({
            method: 'POST',
            url: `${apiUrl}/products/${id}`,
            headers: {
                "content-type": "multipart/form-data",
                'access_token': token || ''
            },
            data: formData
        });

        return Response.json({ ...response?.data }, { status: 200 })
    } catch (error) {
        return Response.json({ error, req }, { status: 500 })
    }
}

export async function DELETE(req: Request) {
    const url = new URL(req.url)
    const id = url.searchParams.get("id")

    const token = cookies().get('token')?.value
    if (!token) {
        return Response.json({ code: '401', message: 'You are unauthorized' }, { status: 401 })
    }

    try {
        const response = await axios.request({
            method: 'DELETE',
            url: `${apiUrl}/products/${id}`,
            headers: {
                'Content-Type': 'application/json',
                'access_token': token || ''
            },
        });

        return Response.json({ ...response?.data }, { status: 200 })
    } catch (error) {
        return Response.json({ error, req }, { status: 500 })
    }
}