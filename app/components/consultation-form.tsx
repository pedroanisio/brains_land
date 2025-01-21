"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { scheduleConsultation } from "../actions/contact"

export function ConsultationForm() {
  const [isPending, setIsPending] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(formData: FormData) {
    setIsPending(true)
    try {
      const result = await scheduleConsultation(formData)
      if (result.success) {
        toast({
          title: "Success!",
          description: result.message,
        })
        // Reset form
        const form = document.getElementById("consultation-form") as HTMLFormElement
        form.reset()
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsPending(false)
    }
  }

  return (
    <form id="consultation-form" action={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" required />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required />
      </div>
      <div>
        <Label htmlFor="company">Company</Label>
        <Input id="company" name="company" required />
      </div>
      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? "Submitting..." : "Schedule Consultation"}
      </Button>
    </form>
  )
}

