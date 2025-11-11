import api from '../api/api';
import { jwtDecode } from 'jwt-decode';

export type User = {
  id : number;
  name: string;
  email: string;
  email_verified_at?: string | null;
};

type LoginResponse = {
  token?: string; // legacy
  access_token?: string;
  user?: User;
  token_type?: string;
  message?: string;
};

export async function login(email: string,password: string){
  const res = await api.post<LoginResponse>('auth/login',{email,password});
  const token = res.data.access_token || res.data.token;
  if (!token) throw new Error(res.data.message || 'Login failed');
  localStorage.setItem('access_token',token);
  
  const user = res.data.user ?? (jwtDecode(token));
  return { token, user: res.data.user ?? user};
}

export function logoutClient() {
  localStorage.removeItem('access_token');
}
export async function me(): Promise<User> {
  const res = await api.get<User>('/auth/me');
  return res.data;
}
