export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: "admin" | "editor" | "viewer" | "guest";
  createdAt: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: "active" | "archived" | "completed";
  ownerId: string;
  members: ProjectMember[];
  createdAt: string;
  updatedAt: string;
}

export interface ProjectMember {
  userId: string;
  role: "admin" | "editor" | "viewer";
  user: User;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: "todo" | "in_progress" | "review" | "done";
  priority: "low" | "medium" | "high" | "urgent";
  projectId: string;
  assigneeId?: string;
  assignee?: User;
  dueDate?: string;
  estimatedHours?: number;
  tags: string[];
  aiPrediction?: {
    estimatedCompletion: string;
    confidence: number;
  };
  createdAt: string;
  updatedAt: string;
}

export interface Note {
  id: string;
  title: string;
  content: string;
  projectId?: string;
  tags: string[];
  embedding?: number[];
  version: number;
  versions: NoteVersion[];
  createdAt: string;
  updatedAt: string;
}

export interface NoteVersion {
  version: number;
  content: string;
  createdAt: string;
  createdBy: string;
}

export interface FileItem {
  id: string;
  name: string;
  type: string;
  size: number;
  url: string;
  projectId?: string;
  encrypted: boolean;
  aiTags: string[];
  createdAt: string;
}

export interface Activity {
  id: string;
  type: "task_created" | "task_updated" | "note_created" | "file_uploaded" | "comment_added";
  userId: string;
  user: User;
  projectId?: string;
  metadata: Record<string, any>;
  createdAt: string;
}

export interface DashboardStats {
  totalProjects: number;
  activeTasks: number;
  completedTasks: number;
  totalNotes: number;
  storageUsed: number;
  upcomingDeadlines: Task[];
  recentActivity: Activity[];
}
