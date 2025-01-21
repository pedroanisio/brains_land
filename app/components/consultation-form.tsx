"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

export function ConsultationForm() {
  const [isPending, setIsPending] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsPending(true)

    const formData = new FormData(event.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
    }

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Here you would typically send this to an external API
    console.log("Form submitted:", data)

    toast({
      title: "Success!",
      description: "Thanks! We'll be in touch shortly to schedule your consultation.",
    })

    // Reset form
    event.currentTarget.reset()
    setIsPending(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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

