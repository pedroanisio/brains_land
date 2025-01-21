import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is artificial intelligence (AI)?",
    answer:
      "Artificial Intelligence refers to the simulation of human intelligence in machines that are programmed to think and learn like humans. This includes problem-solving, learning, planning, and natural language processing.",
  },
  {
    question: "How can AI benefit my business?",
    answer:
      "AI can benefit businesses in numerous ways, including automating repetitive tasks, providing data-driven insights, improving customer experiences, optimizing operations, and enabling predictive analytics for better decision-making.",
  },
  {
    question: "What industries does BRAIn.Systems work with?",
    answer:
      "BRAIn.Systems works with a wide range of industries, including healthcare, finance, retail, manufacturing, technology, and education. Our AI solutions are adaptable to various sectors and business needs.",
  },
  {
    question: "How long does it typically take to implement an AI solution?",
    answer:
      "The implementation time for an AI solution can vary depending on the complexity of the project and the specific needs of your business. Simple projects might take a few weeks, while more complex, enterprise-wide solutions could take several months.",
  },
  {
    question: "Is my data safe when using AI solutions?",
    answer:
      "At BRAIn.Systems, we prioritize data security and privacy. We implement robust security measures and comply with industry standards and regulations to ensure your data is protected. We also offer on-premises solutions for businesses with strict data governance requirements.",
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <section className="px-4 py-24 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 mb-12">
            Find answers to common questions about AI and our services at BRAIn.Systems.
          </p>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>
      <Footer />
    </div>
  )
}

