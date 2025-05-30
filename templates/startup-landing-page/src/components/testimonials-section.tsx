import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "SaaSify transformed our workflow completely. The analytics dashboard gives us insights we never had before, and the automation features saved us countless hours.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "CTO, InnovateCorp",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "The security features are top-notch, and the API integration was seamless. Our development team was up and running in just a few hours.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, GrowthCo",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "The growth tools and analytics have been game-changing for our marketing campaigns. We've seen a 300% increase in conversion rates since switching.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Founder, StartupXYZ",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "As a startup, we needed something that could scale with us. SaaSify has been perfect - from 5 users to 50+ without any hiccups.",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "Operations Manager, ScaleCorp",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "The customer support is exceptional. Any question we have is answered within minutes, and the team genuinely cares about our success.",
    rating: 5,
  },
  {
    name: "Alex Martinez",
    role: "Product Manager, TechFlow",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "The mobile app is fantastic. I can manage everything on the go, and the real-time notifications keep me updated on all important metrics.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Loved by thousands of businesses</h2>
          <p className="text-lg text-muted-foreground">
            See what our customers have to say about their experience with SaaSify.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>

                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}