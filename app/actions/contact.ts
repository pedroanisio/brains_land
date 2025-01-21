"use server"

export async function scheduleConsultation(formData: FormData) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const name = formData.get("name")
  const email = formData.get("email")
  const company = formData.get("company")

  // Here you would typically send this to your CRM or email service
  console.log("Consultation scheduled:", { name, email, company })

  return {
    success: true,
    message: "Thanks! We'll be in touch shortly to schedule your consultation.",
  }
}

