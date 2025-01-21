import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { ConsultationDialog } from "../components/consultation-dialog"

const industries = [
  {
    name: "Healthcare",
    description: "Transforming healthcare with cutting-edge AI solutions and custom software.",
    details:
      "Our AI-powered solutions help healthcare providers improve patient outcomes, streamline operations, and enhance decision-making processes.",
  },
  {
    name: "Finance",
    description: "Revolutionizing finance with advanced AI and custom software solutions.",
    details:
      "We deliver intelligent systems for risk assessment, fraud detection, and personalized financial services to keep you ahead in the financial sector.",
  },
  {
    name: "Retail",
    description: "Enhancing retail experiences with AI-driven insights and software.",
    details:
      "Our solutions help retailers optimize inventory, personalize customer experiences, and streamline supply chain management.",
  },
  {
    name: "Manufacturing",
    description: "Boosting efficiency in manufacturing with smart AI and software systems.",
    details:
      "We provide AI-powered predictive maintenance, quality control, and process optimization solutions to drive manufacturing excellence.",
  },
  {
    name: "Technology",
    description: "Accelerating tech innovation with cutting-edge AI and software development.",
    details:
      "Our tailored solutions help tech companies stay competitive, from AI-enhanced product development to advanced data analytics.",
  },
  {
    name: "Education",
    description: "Revolutionizing learning with AI-powered educational tools and platforms.",
    details:
      "We develop adaptive learning systems, intelligent tutoring solutions, and data-driven educational management tools to enhance the learning experience.",
  },
]

export default function SolutionsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      <main className="flex-grow pt-24">
        <section className="px-4 py-24 max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Industry Solutions</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            BRAIn.Systems delivers tailored AI and software solutions across various industries. Explore how we can
            transform your sector:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{industry.name}</CardTitle>
                  <CardDescription>{industry.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{industry.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to innovate in your industry?</h2>
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

