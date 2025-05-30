import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Shield, Zap, Users, Globe, Smartphone, Brain, Lock, TrendingUp } from "lucide-react"

const features = [
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Get deep insights into your business with real-time analytics and customizable dashboards.",
    badge: "Popular",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with end-to-end encryption and compliance certifications.",
    badge: "Secure",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance with global CDN and edge computing for instant responses.",
    badge: "Fast",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Seamless collaboration tools with real-time editing and communication features.",
    badge: "New",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Deploy worldwide with multi-region support and automatic scaling capabilities.",
    badge: "Scalable",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Native mobile apps and responsive design for productivity on any device.",
    badge: "Mobile",
  },
  {
    icon: Brain,
    title: "AI-Powered",
    description: "Leverage machine learning for predictive analytics and automated insights.",
    badge: "AI",
  },
  {
    icon: Lock,
    title: "Privacy Focused",
    description: "Your data stays yours with transparent privacy policies and data ownership.",
    badge: "Private",
  },
  {
    icon: TrendingUp,
    title: "Growth Tools",
    description: "Built-in marketing and growth tools to help scale your business efficiently.",
    badge: "Growth",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Everything you need to succeed</h2>
          <p className="text-lg text-muted-foreground">
            Powerful features designed to streamline your workflow and accelerate your growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
