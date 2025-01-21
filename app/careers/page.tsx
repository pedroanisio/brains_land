import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const jobOpenings = [
  {
    title: "AI Research Scientist",
    department: "Research & Development",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "New York, NY",
    type: "Full-time",
  },
  {
    title: "Data Analyst",
    department: "Data Science",
    location: "San Francisco, CA",
    type: "Full-time",
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "Remote",
    type: "Full-time",
  },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <section className="px-4 py-24 max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Careers at BRAIn.Systems</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            Join our team of innovators and help shape the future of AI. We're always looking for talented individuals
            who are passionate about pushing the boundaries of technology.
          </p>
          <h2 className="text-2xl font-bold mb-6">Current Openings</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {jobOpenings.map((job, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{job.title}</CardTitle>
                  <CardDescription>{job.department}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    <span className="font-semibold">Location:</span> {job.location}
                    <br />
                    <span className="font-semibold">Type:</span> {job.type}
                  </p>
                  <Button>Apply Now</Button>
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

