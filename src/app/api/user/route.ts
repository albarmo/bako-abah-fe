import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { cookies } from 'next/headers';

const apiUrl = process.env.apiUrl;

export async function GET(req: Request, res: Response) {
    const token = cookies().get('token')?.value
    if (!token) {
        return Response.json({ code: '401', message: 'You are unauthorized' }, { status: 401 })
    }
    try {
        const response = await axios.request({
            method: 'GET',
            url: `${apiUrl}/user`,
            headers: {
                'Content-Type': 'application/json',
                'access_token': token || ''
            }
        });
        return Response.json({ ...response?.data }, { status: 200 })
    } catch (error) {
        return Response.json({ error }, { status: 500 })
    }
}

export async function POST(req: Request) {
    const data = await req.json();
    try {
        const response = await axios.request({
            method: 'POST',
            url: `${apiUrl}/user/register`,
            headers: {
                'Content-Type': 'application/json'
            },
            data
        });

        return Response.json({ ...response?.data }, { status: 200 })
    } catch (error) {
        return Response.json({ error, req }, { status: 500 })
    }
}

export async function PUT(req: Request) {
    const token = cookies().get('token')?.value
    if (!token) {
        return Response.json({ code: '401', message: 'You are unauthorized' }, { status: 401 })
    }
    const data = await req.json();
    const { id, name, email, phone } = data

    try {
        const response = await axios.request({
            method: 'PUT',
            url: `${apiUrl}/user/${id}`,
            headers: {
                'Content-Type': 'application/json',
                'access_token': token || ''
            },
            data: { name, email, phone }
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
            url: `${apiUrl}/user/${id}`,
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