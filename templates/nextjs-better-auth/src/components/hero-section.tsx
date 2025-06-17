import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-secondary/5`} />

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium mb-8 animate-fade-in">
            <span className="mr-2 h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            New: AI-powered analytics dashboard
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6 animate-fade-in-up">
            Scale Your Business
            <span className="block text-primary">Beyond Limits</span>
          </h1>

          {/* Description */}
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-10 animate-fade-in-up animation-delay-200">
            Transform your workflow with our cutting-edge SaaS platform. Automate processes, gain insights, and
            accelerate growth with tools designed for modern businesses.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up animation-delay-400">
            <Button size="lg" className="group">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="group">
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </div>

          {/* Hero Image */}
          <div className="relative mx-auto max-w-5xl animate-fade-in-up animation-delay-600">
            <div className="relative rounded-xl border bg-background/50 p-2 shadow-2xl backdrop-blur">
              <Image
                src="/placeholder.svg?height=600&width=1000"
                alt="Dashboard Preview"
                width={1000}
                height={600}
                className="rounded-lg"
                priority
              />
              <div className="absolute inset-0 rounded-xl bg-linear-to-t from-background/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
