import { NextResponse } from 'next/server'
import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

export async function POST(req: Request) {
  try {
    const { symptoms } = await req.json()

    const model = genAI.getGenerativeModel({ model: "gemini-pro" })

    const prompt = `Analyze the following symptoms and provide a possible diagnosis along with recommended actions. Be cautious and always advise consulting a healthcare professional for accurate diagnosis and treatment. Symptoms: ${symptoms}`

    const result = await model.generateContent(prompt)
    const response = await result.response
    const analysis = response.text()


    // In a real app, you'd save this to a database and return an ID
    const analysisId = Date.now().toString()

    return NextResponse.json({ id: analysisId, analysis })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'Failed to analyze symptoms' }, { status: 500 })
  }
}

