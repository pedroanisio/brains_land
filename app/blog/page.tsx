import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import Link from "next/link"

const blogPosts = [
  {
    title: "The Future of AI in Business",
    description: "Exploring how AI is reshaping industries and driving innovation.",
    date: "2023-05-15",
    slug: "future-of-ai-in-business",
  },
  {
    title: "Demystifying Machine Learning",
    description: "A beginner's guide to understanding machine learning concepts.",
    date: "2023-06-02",
    slug: "demystifying-machine-learning",
  },
  {
    title: "AI Ethics: Navigating the Challenges",
    description: "Addressing the ethical considerations in AI development and deployment.",
    date: "2023-06-20",
    slug: "ai-ethics-challenges",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      <main className="flex-grow pt-24">
        <section className="px-4 py-24 max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">BRAIn.Systems Blog</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            Stay updated with the latest insights, trends, and breakthroughs in AI and software development.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{new Date(post.date).toLocaleDateString()}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  <Link href={`/blog/${post.slug}`} className="text-purple-600 hover:underline">
                    Read more
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

