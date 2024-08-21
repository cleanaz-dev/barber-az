/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ZLrwCdzrhr7
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

export default function CreateWeeklySchedule() {
  return (
    <main className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Weekly Schedule</h1>
          <p className="text-gray-500 dark:text-gray-400">Enter your work hours for each day of the week.</p>
        </div>
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="monday-start">Monday</Label>
              <div className="flex space-x-2">
                <Input id="monday-start" placeholder="Start time" type="time" value="09:00" />
                <Input id="monday-end" placeholder="End time" type="time" value="17:00"/>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="tuesday-start">Tuesday</Label>
              <div className="flex space-x-2">
                <Input id="tuesday-start" placeholder="Start time" type="time" value="09:00"/>
                <Input id="tuesday-end" placeholder="End time" type="time" value="17:00" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="wednesday-start">Wednesday</Label>
              <div className="flex space-x-2">
                <Input id="wednesday-start" placeholder="Start time" type="time" value="09:00"/>
                <Input id="wednesday-end" placeholder="End time" type="time" value="17:00"/>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="thursday-start">Thursday</Label>
              <div className="flex space-x-2">
                <Input id="thursday-start" placeholder="Start time" type="time" value="09:00"/>
                <Input id="thursday-end" placeholder="End time" type="time" value="09:00" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="friday-start">Friday</Label>
              <div className="flex space-x-2">
                <Input id="friday-start" placeholder="Start time" type="time" value="09:00"/>
                <Input id="friday-end" placeholder="End time" type="time" value="17:00"/>
              </div>
            </div>
            
          </div>
          <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
              <Label htmlFor="saturday-start" className="text-slate-600">Saturday</Label>
              <div className="flex space-x-2">
                <Input id="saturday-start" placeholder="Start time" type="time" />
                <Input id="saturday-end" placeholder="End time" type="time" />
              </div>
            </div>
          <div className="space-y-2">
            <Label htmlFor="sunday-start" className="text-slate-600">Sunday</Label>
            <div className="flex space-x-2">
              <Input id="sunday-start" placeholder="Start time" type="time" />
              <Input id="sunday-end" placeholder="End time" type="time" />
            </div>
          </div>
          </div>
          {/* <Button className="w-full" type="submit">
            Save Schedule
          </Button> */}
        </form>
      </div>
    </main>
  )
}