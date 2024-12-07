"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function SymptomAnalysis() {
  const [symptoms, setSymptoms] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [analysisResult, setAnalysisResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    setAnalysisResult(null)  // Reset previous results

    try {
      const response = await fetch('/api/analyze-symptoms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ symptoms }),
      })

      if (response.ok) {
        const result = await response.json()
        setAnalysisResult(result.analysis) // Set the analysis result
      } else {
        throw new Error('Failed to analyze symptoms')
      }
    } catch (error) {
      console.error('Error:', error)
      setError('An error occurred while analyzing symptoms. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Symptom Analysis</CardTitle>
          <CardDescription>Describe your symptoms in detail for AI analysis</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <Textarea
              placeholder="Describe your symptoms here..."
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              rows={10}
              className="w-full"
              required
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Analyzing...' : 'Analyze Symptoms'}
            </Button>
          </CardFooter>
        </form>
        {/* Display Analysis Result or Error */}
        {analysisResult && (
          <CardContent className="mt-4">
            <h2 className="text-xl font-semibold">Analysis Result</h2>
            <div className="mt-2 text-lg" dangerouslySetInnerHTML={{ __html: analysisResult }}></div>
          </CardContent>
        )}
        {error && (
          <CardContent className="mt-4">
            <p className="text-red-500">{error}</p>
          </CardContent>
        )}
      </Card>
    </div>
  )
}
