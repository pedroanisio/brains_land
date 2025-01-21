import { Header } from "../components/header"
import { Footer } from "../components/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <section className="px-4 py-24 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="prose prose-lg">
            <p>Last updated: [Current Date]</p>
            <p>
              At BRAIn.Systems, we are committed to protecting your privacy and ensuring the security of your personal
              information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you
              use our website or services.
            </p>
            <h2>Information We Collect</h2>
            <p>
              We may collect personal information that you provide directly to us, such as your name, email address, and
              company information when you contact us or use our services.
            </p>
            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, communicate with you,
              and comply with legal obligations.
            </p>
            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page.
            </p>
            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at privacy@brain.systems.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

