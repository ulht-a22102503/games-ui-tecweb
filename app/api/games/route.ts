export async function GET() {
    const resp = await fetch(`${process.env.API_URL}/games`, {
        method: "GET",
    })
    if (!resp.ok) {
        return Response.json({ error: resp.statusText }, { status: resp.status })
    }
    const data = await resp.json()
    return Response.json(data)
}