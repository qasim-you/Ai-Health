import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Bell, Plus } from 'lucide-react'

export default function Medications() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Your Medications</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Medication
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Current Medications</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Medication</TableHead>
                <TableHead>Dosage</TableHead>
                <TableHead>Frequency</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Lisinopril</TableCell>
                <TableCell>10mg</TableCell>
                <TableCell>Once daily</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <Bell className="mr-2 h-4 w-4" /> Set Reminder
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Metformin</TableCell>
                <TableCell>500mg</TableCell>
                <TableCell>Twice daily</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <Bell className="mr-2 h-4 w-4" /> Set Reminder
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Atorvastatin</TableCell>
                <TableCell>20mg</TableCell>
                <TableCell>Once daily at bedtime</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <Bell className="mr-2 h-4 w-4" /> Set Reminder
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

