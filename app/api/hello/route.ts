import type { NextApiRequest, NextApiResponse } from 'next'

export async function GET(req: NextApiRequest,
    res: NextApiResponse) {
    console.log("Hello, World!");
    // res.json({ message: "Hello, World!" });
    // res.status(200).end();
    return new Response("Hello, World!", {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
}

