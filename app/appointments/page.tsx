import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, Plus } from 'lucide-react'
 
export default function Appointments() {   
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Your Appointments</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> New Appointment
        </Button>
      </div>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="divide-y divide-gray-200">
              <li className="py-4 flex items-center justify-between">
                <div>
                  <p className="font-medium">Dr. Smith - Checkup</p>
                  <p className="text-sm text-muted-foreground">May 15, 2023 at 10:00 AM</p>
                </div>
                <Button variant="outline" size="sm">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  Reschedule
                </Button>
              </li>
              <li className="py-4 flex items-center justify-between">
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
        <Card>
          <CardHeader>
            <CardTitle>Past Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="divide-y divide-gray-200">
              <li className="py-4">
                <p className="font-medium">Dr. Johnson - Annual Physical</p>
                <p className="text-sm text-muted-foreground">April 10, 2023 at 9:00 AM</p>
              </li>
              <li className="py-4">
                <p className="font-medium">Dentist - Cleaning</p>
                <p className="text-sm text-muted-foreground">March 5, 2023 at 11:00 AM</p>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

