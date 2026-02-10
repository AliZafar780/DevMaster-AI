import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Brain,
  Kanban,
  FileText,
  BarChart3,
  Shield,
  Zap,
  Users,
  Github,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Kanban,
    title: "Advanced Kanban Boards",
    description: "AI-powered task management with predictive completion times and smart prioritization.",
  },
  {
    icon: FileText,
    title: "Smart Notes",
    description: "Rich-text editor with semantic search, auto-summarization, and knowledge graph linking.",
  },
  {
    icon: BarChart3,
    title: "Powerful Analytics",
    description: "Interactive dashboards with real-time updates and AI-generated insights.",
  },
  {
    icon: Shield,
    title: "Secure Storage",
    description: "Encrypted vault with E2EE, unlimited storage, and AI-powered auto-tagging.",
  },
  {
    icon: Brain,
    title: "AI Assistant",
    description: "Code generation, bug detection, and personalized learning paths.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Real-time multiplayer editing, chat integration, and audit logs.",
  },
];

const stats = [
  { value: "100%", label: "Free & Open Source" },
  { value: "0", label: "Paid Tiers" },
  { value: "∞", label: "Possibilities" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium mb-8 bg-background">
              <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
              v1.0 Now Available - Completely Free Forever
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
              The Ultimate{" "}
              <span className="text-primary">Developer</span>{" "}
              Productivity Platform
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Track progress, manage notes, visualize data, and leverage AI—all in one place. 
              Built by developers, for developers. Open-source and forever free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" className="gap-2">
                  Get Started Free
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://github.com/alizafar/devmaster-ai" target="_blank">
                <Button size="lg" variant="outline" className="gap-2">
                  <Github className="h-4 w-4" />
                  View on GitHub
                </Button>
              </Link>
            </div>
            <div className="mt-12 flex justify-center gap-8 text-sm text-muted-foreground">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Everything You Need</h2>
            <p className="text-muted-foreground text-lg">
              A complete suite of tools designed to supercharge your development workflow
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Zap className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Open Source, Forever Free</h2>
            <p className="text-muted-foreground text-lg mb-8">
              DevMaster AI is MIT licensed and maintained by Ali Zafar and the community. 
              No hidden fees, no premium tiers—just powerful tools for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg">Start Building Today</Button>
              </Link>
              <Link href="/docs">
                <Button size="lg" variant="outline">Read Documentation</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">DevMaster AI</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Created by Ali Zafar • MIT Licensed • Free Forever
            </p>
            <div className="flex gap-4">
              <Link href="https://github.com/alizafar/devmaster-ai" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
