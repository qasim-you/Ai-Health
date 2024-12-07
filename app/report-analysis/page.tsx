"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ReportAnalysis() {
  const [file, setFile] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) return

    setIsLoading(true)
    const formData = new FormData()
    formData.append('file', file)

    try {
      const response = await fetch('/api/analyze-report', {
        method: 'POST',
        body: formData,
      })
      if (response.ok) {
        const result = await response.json()
        router.push(`/analysis-result?type=report&id=${result.id}`)
      } else {
        throw new Error('Failed to analyze report')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('An error occurred while analyzing the report. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  // Specify the correct type for the event in the onChange handler
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null
    setFile(file)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Medical Report Analysis</CardTitle>
          <CardDescription>Upload a medical report (PDF) for AI analysis</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <Label htmlFor="report-upload">Upload Medical Report (PDF)</Label>
            <Input
              id="report-upload"
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              required
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={isLoading || !file}>
              {isLoading ? 'Analyzing...' : 'Analyze Report'}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
