import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Download, Upload } from 'lucide-react'

export default function MedicalRecords() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Medical Records</h1>
        <div className="space-x-2">
          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" /> Upload Record
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Download All
          </Button>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Your Medical History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Provider</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>May 1, 2023</TableCell>
                <TableCell>Blood Test Results</TableCell>
                <TableCell>Lab Corp</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <Download className="mr-2 h-4 w-4" /> Download
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>April 15, 2023</TableCell>
                <TableCell>X-Ray Report</TableCell>
                <TableCell>City Hospital</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <Download className="mr-2 h-4 w-4" /> Download
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>March 10, 2023</TableCell>
                <TableCell>Vaccination Record</TableCell>
                <TableCell>Community Clinic</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <Download className="mr-2 h-4 w-4" /> Download
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

