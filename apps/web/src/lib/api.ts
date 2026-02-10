import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authApi = {
  login: (email: string, password: string) =>
    api.post("/api/v1/auth/login", { email, password }),
  register: (data: { email: string; password: string; name: string }) =>
    api.post("/api/v1/auth/register", data),
  me: () => api.get("/api/v1/auth/me"),
  logout: () => api.post("/api/v1/auth/logout"),
};

// Projects API
export const projectsApi = {
  list: () => api.get("/api/v1/projects"),
  create: (data: any) => api.post("/api/v1/projects", data),
  get: (id: string) => api.get(`/api/v1/projects/${id}`),
  update: (id: string, data: any) => api.put(`/api/v1/projects/${id}`, data),
  delete: (id: string) => api.delete(`/api/v1/projects/${id}`),
};

// Tasks API
export const tasksApi = {
  list: (projectId?: string) =>
    api.get("/api/v1/tasks", { params: { project_id: projectId } }),
  create: (data: any) => api.post("/api/v1/tasks", data),
  update: (id: string, data: any) => api.put(`/api/v1/tasks/${id}`, data),
  delete: (id: string) => api.delete(`/api/v1/tasks/${id}`),
};

// Notes API
export const notesApi = {
  list: () => api.get("/api/v1/notes"),
  create: (data: any) => api.post("/api/v1/notes", data),
  get: (id: string) => api.get(`/api/v1/notes/${id}`),
  update: (id: string, data: any) => api.put(`/api/v1/notes/${id}`, data),
  delete: (id: string) => api.delete(`/api/v1/notes/${id}`),
  search: (query: string) =>
    api.get("/api/v1/notes/search", { params: { q: query } }),
};

// Dashboard API
export const dashboardApi = {
  stats: () => api.get("/api/v1/dashboard/stats"),
  activity: () => api.get("/api/v1/dashboard/activity"),
};
