import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Menu } from "lucide-react"
import { ConsultationDialog } from "./components/consultation-dialog"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Footer } from "./components/footer"
import { Header } from "./components/header"

export default function Home() {
  const navigation = [
    { name: "Services", href: "/services" },
    { name: "Solutions", href: "/solutions" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  const services = [
    {
      title: "AI Consulting",
      description: "Strategic AI implementation and proof of concepts",
      href: "/services/ai-consulting",
    },
    {
      title: "Custom Software",
      description: "Web, mobile, and system integration solutions",
      href: "/services/custom-software",
    },
    {
      title: "Data Analytics",
      description: "Business intelligence and predictive analytics",
      href: "/services/data-analytics",
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud solutions",
      href: "/services/cloud-infrastructure",
    },
  ]

  const industries = [
    {
      name: "Healthcare",
      description: "Transforming healthcare with cutting-edge AI solutions and custom software.",
      href: "/solutions/healthcare",
    },
    {
      name: "Finance",
      description: "Transforming finance with cutting-edge AI solutions and custom software.",
      href: "/solutions/finance",
    },
    {
      name: "Retail",
      description: "Transforming retail with cutting-edge AI solutions and custom software.",
      href: "/solutions/retail",
    },
    {
      name: "Manufacturing",
      description: "Transforming manufacturing with cutting-edge AI solutions and custom software.",
      href: "/solutions/manufacturing",
    },
    {
      name: "Technology",
      description: "Transforming technology with cutting-edge AI solutions and custom software.",
      href: "/solutions/technology",
    },
    {
      name: "Education",
      description: "Transforming education with cutting-edge AI solutions and custom software.",
      href: "/solutions/education",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header/Navbar */}
      <Header />

      {/* Hero Section */}
      <main className="pt-24">
        <section className="px-4 py-24 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold tracking-tight lg:text-7xl">
              Reinvent Your Business with Next-Gen AI & Software
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl">
              BRAIn.Systems helps you leverage AI for transformation in data analytics, software development, and
              beyond.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ConsultationDialog className="text-base bg-purple-600 hover:bg-purple-700">
                Get Started
              </ConsultationDialog>
              <Button size="lg" variant="outline" className="text-base" asChild>
                <Link href="/services">See Our Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <section className="py-16 bg-white/50">
          <div className="px-4 max-w-7xl mx-auto">
            <h2 className="text-center text-gray-600 mb-8">Trusted by Industry Leaders</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-50">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-12 w-32 bg-gray-200 rounded" />
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24">
          <div className="px-4 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">What We Do</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, i) => (
                <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
                  <Link href={service.href}>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Solutions */}
        <section className="py-24 bg-white/50">
          <div className="px-4 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Industry-Specific Solutions</h2>
            <p className="text-xl text-gray-600 mb-12">
              Our AI and software solutions drive efficiency and innovation across industries.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, i) => (
                <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold mb-2">{industry.name}</h3>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  <Button variant="link" asChild className="p-0">
                    <Link href={industry.href}>
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-24 bg-purple-600 text-white">
          <div className="px-4 max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl mb-8 text-purple-100">Let's explore your opportunities for innovation and growth.</p>
            <ConsultationDialog className="bg-white text-purple-600 hover:bg-purple-50">
              Book a Free Consultation
            </ConsultationDialog>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  )
}

