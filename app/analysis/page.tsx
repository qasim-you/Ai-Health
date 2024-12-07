"use client"

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import Link from 'next/link'

export default function Analysis() {
  const [analysis, setAnalysis] = useState<string | null>(null)

  useEffect(() => {
    const fetchAnalysis = async () => {
      try {
        const response = await fetch('/api/analysis')
        if (response.ok) {
          const data = await response.json()
          setAnalysis(data.analysis)
        } else {
          console.error('Failed to fetch analysis')
        }
      } catch (error) {
        console.error('Error:', error)
      }
    }

    fetchAnalysis()
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-4xl font-bold mb-8">AI Analysis Result</h1>
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle>Medical Report Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            {analysis ? (
              <p className="text-left">{analysis}</p>
            ) : (
              <p>Loading analysis...</p>
            )}
          </CardContent>
        </Card>
        <Link href="/" className="mt-8">
          <Button>Back to Home</Button>
        </Link>
      </main>
    </div>
  )
}

