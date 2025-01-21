import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { ConsultationDialog } from "../components/consultation-dialog"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      <main className="flex-grow pt-24">
        <section className="px-4 py-24 max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About BRAIn.Systems</h1>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xl text-gray-600 mb-6">
                BRAIn.Systems is at the forefront of AI innovation, dedicated to transforming businesses through
                cutting-edge artificial intelligence and software solutions.
              </p>
              <p className="text-xl text-gray-600 mb-6">
                Founded in 2020, our team of expert data scientists, software engineers, and business strategists work
                tirelessly to bring the power of AI to organizations across various industries.
              </p>
              <p className="text-xl text-gray-600 mb-6">
                Our mission is to democratize AI technology, making it accessible and beneficial for businesses of all
                sizes. We believe in the transformative power of AI to drive efficiency, innovation, and growth.
              </p>
            </div>
            <div className="bg-gray-200 h-80 rounded-lg"></div>
          </div>
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Innovation: We constantly push the boundaries of what's possible with AI.</li>
              <li>Integrity: We uphold the highest ethical standards in AI development and deployment.</li>
              <li>Collaboration: We work closely with our clients to ensure their success.</li>
              <li>Excellence: We strive for excellence in every solution we deliver.</li>
            </ul>
          </div>
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to join us on the AI revolution?</h2>
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

