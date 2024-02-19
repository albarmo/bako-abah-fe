import axios from "axios";

const apiUrl = process.env.apiUrl;
export async function POST(req: Request) {
    const data = await req.json();
    try {
        const response = await axios.request({
            method: "POST",
            url: `${apiUrl}/user/register`,
            headers: {
                "Content-Type": "application/json",
            },
            data,
        });
        return Response.json({ ...response?.data }, { status: 200 });
    } catch (error) {
        return Response.json({ error, req }, { status: 500 });
    }
}
