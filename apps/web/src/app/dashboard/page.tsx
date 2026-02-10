"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  FolderKanban, 
  FileText, 
  BarChart3, 
  Shield, 
  Plus,
  Clock,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

const stats = [
  { title: "Active Projects", value: "12", icon: FolderKanban, trend: "+2 this week" },
  { title: "Tasks Completed", value: "48", icon: CheckCircle2, trend: "+15 this week" },
  { title: "Notes Created", value: "156", icon: FileText, trend: "+23 this week" },
  { title: "Storage Used", value: "2.4 GB", icon: Shield, trend: "of 10 GB" },
];

const recentTasks = [
  { id: 1, title: "Implement authentication", status: "in_progress", priority: "high" },
  { id: 2, title: "Design dashboard UI", status: "done", priority: "medium" },
  { id: 3, title: "Setup database schema", status: "todo", priority: "high" },
  { id: 4, title: "Write API documentation", status: "review", priority: "low" },
];

const recentNotes = [
  { id: 1, title: "Project Architecture", updatedAt: "2 hours ago", tags: ["architecture", "planning"] },
  { id: 2, title: "API Design Decisions", updatedAt: "5 hours ago", tags: ["api", "backend"] },
  { id: 3, title: "Meeting Notes: Sprint Planning", updatedAt: "1 day ago", tags: ["meeting", "sprint"] },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-background border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <LayoutDashboard className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-bold">Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm"><Plus className="h-4 w-4 mr-2" /> New Project</Button>
              <Avatar>
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.trend}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="tasks" className="space-y-4">
          <TabsList>
            <TabsTrigger value="tasks"><CheckCircle2 className="h-4 w-4 mr-2" /> Tasks</TabsTrigger>
            <TabsTrigger value="notes"><FileText className="h-4 w-4 mr-2" /> Notes</TabsTrigger>
            <TabsTrigger value="analytics"><BarChart3 className="h-4 w-4 mr-2" /> Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="tasks" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Tasks</CardTitle>
                <CardDescription>Your tasks across all projects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTasks.map((task) => (
                    <div key={task.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className={`w-3 h-3 rounded-full ${
                          task.status === "done" ? "bg-green-500" :
                          task.status === "in_progress" ? "bg-blue-500" :
                          task.status === "review" ? "bg-yellow-500" : "bg-gray-300"
                        }`} />
                        <div>
                          <p className="font-medium">{task.title}</p>
                          <p className="text-sm text-muted- capitalize">{task.status.replace("_", " ")}</p>
                        </div>
                      </div>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        task.priority === "high" ? "bg-red-100 text-red-700" :
                        task.priority === "medium" ? "bg-yellow-100 text-yellow-700" :
                        "bg-green-100 text-green-700"
                      }`}>{task.priority}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notes" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Notes</CardTitle>
                <CardDescription>Your latest knowledge entries</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentNotes.map((note) => (
                    <div key={note.id} className="p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                      <h3 className="font-medium mb-2">{note.title}</h3>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          {note.tags.map((tag) => (
                            <span key={tag} className="px-2 py-1 text-xs bg-secondary rounded-full">{tag}</span>
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground flex items-center">
                          <Clock className="h-3 w-3 mr-1" /> {note.updatedAt}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Productivity Overview</CardTitle>
                <CardDescription>Your development metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                  <BarChart3 className="h-12 w-12 mr-4" />
                  <div>
                    <p className="font-medium">Analytics Coming Soon</p>
                    <p className="text-sm">Track your productivity with AI-powered insights</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
