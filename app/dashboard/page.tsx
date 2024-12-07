import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { CalendarDays, Activity, Heart, Pill } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Health Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Activity className="mr-2" /> Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">7,500 steps</p>
            <Progress value={75} className="mt-2" />
            <p className="text-sm text-muted-foreground mt-2">75% of daily goal</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Heart className="mr-2" /> Heart Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">72 bpm</p>
            <p className="text-sm text-muted-foreground">Last checked: 2 hours ago</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Pill className="mr-2" /> Medication
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">2 doses today</p>
            <Button className="mt-2">View Schedule</Button>
          </CardContent>
        </Card>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Appointments</h2>
        <Card>
          <CardContent className="p-0">
            <ul className="divide-y divide-gray-200">
              <li className="flex items-center justify-between py-4 px-6">
                <div>
                  <p className="font-medium">Dr. Smith - Checkup</p>
                  <p className="text-sm text-muted-foreground">May 15, 2023 at 10:00 AM</p>
                </div>
                <Button variant="outline" size="sm">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  Reschedule
                </Button>
              </li>
              <li className="flex items-center justify-between py-4 px-6">
                <div>
                  <p className="font-medium">Lab Test - Blood Work</p>
                  <p className="text-sm text-muted-foreground">May 20, 2023 at 2:00 PM</p>
                </div>
                <Button variant="outline" size="sm">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  Reschedule
                </Button>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

