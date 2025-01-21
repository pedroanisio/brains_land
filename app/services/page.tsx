import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { ConsultationDialog } from "../components/consultation-dialog"

const services = [
  {
    id: "ai-consulting",
    title: "AI Consulting",
    description: "Strategic AI implementation and proof of concepts",
    details:
      "Our AI consulting services help businesses identify opportunities for AI integration, develop proof of concepts, and create strategic roadmaps for AI adoption.",
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    description: "Web, mobile, and system integration solutions",
    details:
      "We build tailored software solutions that address your unique business challenges, from web and mobile applications to complex system integrations.",
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    description: "Business intelligence and predictive analytics",
    details:
      "Transform your data into actionable insights with our advanced analytics services, including data visualization, predictive modeling, and machine learning solutions.",
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud Infrastructure",
    description: "Scalable and secure cloud solutions",
    details:
      "We design, implement, and manage cloud infrastructures that ensure scalability, security, and cost-efficiency for your business operations.",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      <main className="flex-grow pt-24">
        <section className="px-4 py-24 max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Our Services</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            BRAIn.Systems offers a comprehensive suite of AI and software solutions to drive your business forward.
            Explore our services below:
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow" id={service.id}>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to transform your business?</h2>
            <ConsultationDialog className="bg-purple-600 hover:bg-purple-700">
              Schedule a Free Consultation
            </ConsultationDialog>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

