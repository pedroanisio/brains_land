import { Header } from "../components/header"
import { Footer } from "../components/footer"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <section className="px-4 py-24 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <div className="prose prose-lg">
            <p>Last updated: [Current Date]</p>
            <p>
              Welcome to BRAIn.Systems. By accessing our website or using our services, you agree to comply with and be
              bound by the following terms and conditions of use.
            </p>
            <h2>Use of Services</h2>
            <p>
              You agree to use our services only for lawful purposes and in accordance with these Terms of Service. You
              are prohibited from violating or attempting to violate the security of the website or our services.
            </p>
            <h2>Intellectual Property</h2>
            <p>
              The content, features, and functionality of our website and services are owned by BRAIn.Systems and are
              protected by international copyright, trademark, patent, trade secret, and other intellectual property
              laws.
            </p>
            <h2>Limitation of Liability</h2>
            <p>
              BRAIn.Systems shall not be liable for any indirect, incidental, special, consequential, or punitive
              damages resulting from your access to or use of, or inability to access or use, our services.
            </p>
            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Your continued use of our services
              after any such changes constitutes your acceptance of the new Terms of Service.
            </p>
            <h2>Contact Us</h2>
            <p>If you have any questions about these Terms of Service, please contact us at legal@brain.systems.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

