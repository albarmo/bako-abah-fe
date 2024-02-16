import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { cookies } from "next/headers";

const apiUrl = process.env.apiUrl;

export async function GET(req: Request, res: NextResponse) {
    const token  = cookies().get('token')?.value
    try {
        const response = await axios.request({
            method: "GET",
            url: `${apiUrl}/cart/user`,
            headers: {
                access_token: token
            },
        });
        return Response.json({ ...response?.data }, { status: 200 });
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
