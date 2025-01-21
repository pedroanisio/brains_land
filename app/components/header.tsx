"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ConsultationDialog } from "./consultation-dialog"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { usePathname } from "next/navigation"

export function Header() {
  const pathname = usePathname()

  const navigation = [
    { name: "Services", href: "/services" },
    { name: "Solutions", href: "/solutions" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <nav className="px-4 py-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">BRAIn.Systems</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium hover:text-gray-600 ${pathname === item.href ? "text-purple-600" : ""}`}
              >
                {item.name}
              </Link>
            ))}
            <ConsultationDialog className="bg-purple-600 hover:bg-purple-700">
              Schedule a Consultation
            </ConsultationDialog>
          </div>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-sm font-medium hover:text-gray-600 ${pathname === item.href ? "text-purple-600" : ""}`}
                  >
                    {item.name}
                  </Link>
                ))}
                <ConsultationDialog className="bg-purple-600 hover:bg-purple-700 w-full">
                  Schedule a Consultation
                </ConsultationDialog>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}

