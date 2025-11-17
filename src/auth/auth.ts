// src/auth/auth.ts
import api from "../api/api";

export const authService = {
  login: async (email: string, password: string) => {
    return await api.post("/auth/login", { email, password });
  },
  logout: async () => {
    return await api.post("/auth/logout");
  },
  getProfile: async (token: string) => {
    return await api.get("/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
};