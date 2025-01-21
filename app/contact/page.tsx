import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { ConsultationDialog } from "../components/consultation-dialog"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      <main className="flex-grow pt-24">
        <section className="px-4 py-24 max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            Have questions about our AI solutions or want to discuss how we can help your business? We're here to help.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>We'd love to hear from you</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <MapPin className="text-purple-600" />
                  <span>123 AI Street, Tech City, 12345</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-purple-600" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="text-purple-600" />
                  <span>info@brain.systems</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Schedule a Consultation</CardTitle>
                <CardDescription>Let's discuss how we can help your business</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Our team of AI experts is ready to understand your unique challenges and propose tailored solutions.
                </p>
                <ConsultationDialog className="w-full bg-purple-600 hover:bg-purple-700">
                  Book Your Free Consultation
                </ConsultationDialog>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

