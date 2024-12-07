"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function MedicalReport() {
  const [report, setReport] = useState('')
  const [medicine, setMedicine] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ report, medicine }),
      })
      if (response.ok) {
        router.push('/analysis')
      } else {
        console.error('Failed to submit report')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-4xl font-bold mb-8">Submit Medical Report</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-2xl">
          <div className="mb-4">
            <Label htmlFor="report">Medical Report</Label>
            <Textarea
              id="report"
              value={report}
              onChange={(e) => setReport(e.target.value)}
              placeholder="Enter your medical report here..."
              className="mt-1"
              rows={10}
              required
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="medicine">Prescribed Medicine</Label>
            <Input
              id="medicine"
              type="text"
              value={medicine}
              onChange={(e) => setMedicine(e.target.value)}
              placeholder="Enter prescribed medicine"
              className="mt-1"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Submit for Analysis
          </Button>
        </form>
      </main>
    </div>
  )
}

