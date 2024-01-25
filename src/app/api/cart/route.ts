import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { cookies } from "next/headers";

const apiUrl = process.env.apiUrl;

export async function GET(req: Request, res: NextResponse) {
    const url = new URL(req.url);
    const keyword = url.searchParams.get("keyword");
    const limit = url.searchParams.get("limit");
    const offset = url.searchParams.get("offset");
    try {
        const response = await axios.request({
            method: "GET",
            url: `${apiUrl}/cart`,
            headers: {
                access_token:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBkYjY0ZjhhLWU1YWEtNGUyNy1iMGE1LTdkZjYwZjc0ZmJmMyIsImVtYWlsIjoiYmFrb2FiYWhAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkS2NJNnNadG5iWU1vSS4xVUZhSzRnLnc1dHNrUWNwSUZ3V1NpMkFMdjBwb0pmT3o2Z05rVVciLCJwaG9uZV9udW1iZXIiOiIwODEyNDU1NTIzNjUiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MDYwNzI1NDYsImV4cCI6MTcwNjY3NzM0Nn0.9iOjPRp68t_WZsQKsPLNYp3Vu878WzsE9vXaVuMECoU",
            },
        });
        return Response.json({ ...response?.data }, { status: 200 });
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
