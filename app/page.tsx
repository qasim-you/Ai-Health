import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, ClipboardList, Pill, Stethoscope, FileText } from 'lucide-react'
 
export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to Your Health Hub</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/dashboard">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Stethoscope className="mr-2" /> Health Dashboard
              </CardTitle>
            </CardHeader>
            <CardContent>
              View your health overview and recent activities
            </CardContent>
          </Card>
        </Link>
        <Link href="/symptom-analysis">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <ClipboardList className="mr-2" /> Symptom Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              Describe your symptoms for AI-powered analysis
            </CardContent>
          </Card>
        </Link> 
        <Link href="/report-analysis">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2" /> Report Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              Upload medical reports for AI interpretation
            </CardContent>
          </Card>
        </Link>
        <Link href="/appointments">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CalendarDays className="mr-2" /> Appointments
              </CardTitle>
            </CardHeader>
            <CardContent>
              Schedule and manage your medical appointments
            </CardContent>
          </Card>
        </Link>
        <Link href="/medications">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Pill className="mr-2" /> Medications
              </CardTitle>
            </CardHeader>
            <CardContent>
              Manage your prescriptions and set reminders
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}

