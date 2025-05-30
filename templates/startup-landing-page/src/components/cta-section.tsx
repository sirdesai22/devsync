import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 sm:py-32 bg-primary text-primary-foreground">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Ready to transform your business?</h2>
          <p className="text-lg opacity-90 mb-8">
            Join thousands of companies already using SaaSify to scale their operations and drive growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-8">
            <Input type="email" placeholder="Enter your email" className="bg-background text-foreground" />
            <Button variant="secondary" className="group">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <p className="text-sm opacity-75">Start your 14-day free trial. No credit card required.</p>
        </div>
      </div>
    </section>
  )
}
