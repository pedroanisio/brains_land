"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ConsultationForm } from "./consultation-form"

export function ConsultationDialog({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={className}>{children}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Schedule a Consultation</DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll get back to you within 24 hours to schedule your free consultation.
          </DialogDescription>
        </DialogHeader>
        <ConsultationForm />
      </DialogContent>
    </Dialog>
  )
}

