import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import Link from "next/link"

const caseStudies = [
  {
    title: "AI-Powered Predictive Maintenance for Manufacturing",
    client: "Global Manufacturing Co.",
    industry: "Manufacturing",
    description: "Implemented an AI system that reduced equipment downtime by 35% and maintenance costs by 20%.",
    slug: "predictive-maintenance-manufacturing",
  },
  {
    title: "Personalized Learning Platform for Higher Education",
    client: "EduTech University",
    industry: "Education",
    description:
      "Developed an adaptive learning system that improved student engagement by 40% and test scores by 15%.",
    slug: "personalized-learning-platform",
  },
  {
    title: "Fraud Detection System for Financial Services",
    client: "SecureBank",
    industry: "Finance",
    description:
      "Created an AI-driven fraud detection system that reduced fraudulent transactions by 60% and false positives by 30%.",
    slug: "fraud-detection-finance",
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <section className="px-4 py-24 max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Case Studies</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            Explore how BRAIn.Systems has helped businesses across various industries leverage AI to solve complex
            challenges and drive growth.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{study.title}</CardTitle>
                  <CardDescription>
                    {study.client} | {study.industry}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <Link href={`/case-studies/${study.slug}`} className="text-purple-600 hover:underline">
                    Read full case study
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

