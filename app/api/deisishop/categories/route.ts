export async function GET() {
    const result = await fetch("https://deisishop.pythonanywhere.com/categories/")
    const data = await result.json()
    return Response.json(data)
}