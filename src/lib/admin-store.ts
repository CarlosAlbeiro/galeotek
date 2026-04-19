/**
 * Mock admin auth + services CRUD using localStorage.
 * No backend — purely frontend persistence for the v1 demo.
 */
import { useEffect, useState, useSyncExternalStore } from "react";

const AUTH_KEY = "cab_admin_auth_v1";
const SERVICES_KEY = "cab_admin_services_v1";

const ADMIN_USER = "cabadmin";
const ADMIN_PASS = "admin1029";

export type ServiceItem = {
  id: string;
  icon: string; // lucide icon name
  title: string;
  description: string;
  active: boolean;
};

const DEFAULT_SERVICES: ServiceItem[] = [
  {
    id: "s1",
    icon: "Code2",
    title: "Desarrollo de software personalizado",
    description: "Aplicaciones a la medida para automatizar y escalar tu negocio.",
    active: true,
  },
  {
    id: "s2",
    icon: "Globe",
    title: "Páginas web para emprendedores",
    description: "Sitios modernos, rápidos y optimizados para vender más.",
    active: true,
  },
  {
    id: "s3",
    icon: "Wrench",
    title: "Mantenimiento de computadores",
    description: "Diagnóstico, reparación y optimización de equipos.",
    active: true,
  },
  {
    id: "s4",
    icon: "Zap",
    title: "Servicios eléctricos para el hogar",
    description: "Instalaciones seguras, certificadas y a tiempo.",
    active: true,
  },
  {
    id: "s5",
    icon: "Camera",
    title: "Instalación de cámaras de seguridad",
    description: "Vigila tu hogar o negocio desde tu celular las 24 horas.",
    active: true,
  },
  {
    id: "s6",
    icon: "Brain",
    title: "Asesoría tecnológica",
    description: "Te guiamos paso a paso para tomar las mejores decisiones tech.",
    active: true,
  },
];

// ---------- listeners ----------
type Listener = () => void;
const listeners = new Set<Listener>();
const emit = () => listeners.forEach((l) => l());

const isBrowser = () => typeof window !== "undefined";

// ---------- auth ----------
export function isAuthed(): boolean {
  if (!isBrowser()) return false;
  return window.localStorage.getItem(AUTH_KEY) === "1";
}

export function login(username: string, password: string): boolean {
  if (username.trim() === ADMIN_USER && password === ADMIN_PASS) {
    window.localStorage.setItem(AUTH_KEY, "1");
    emit();
    return true;
  }
  return false;
}

export function logout() {
  window.localStorage.removeItem(AUTH_KEY);
  emit();
}

export function useAuth() {
  const [authed, setAuthed] = useState(false);
  useEffect(() => {
    setAuthed(isAuthed());
    const l = () => setAuthed(isAuthed());
    listeners.add(l);
    return () => {
      listeners.delete(l);
    };
  }, []);
  return authed;
}

// ---------- services ----------
function readServices(): ServiceItem[] {
  if (!isBrowser()) return DEFAULT_SERVICES;
  const raw = window.localStorage.getItem(SERVICES_KEY);
  if (!raw) return DEFAULT_SERVICES;
  try {
    return JSON.parse(raw) as ServiceItem[];
  } catch {
    return DEFAULT_SERVICES;
  }
}

function writeServices(items: ServiceItem[]) {
  window.localStorage.setItem(SERVICES_KEY, JSON.stringify(items));
  emit();
}

export function getServices(): ServiceItem[] {
  return readServices();
}

export function createService(s: Omit<ServiceItem, "id">) {
  const items = readServices();
  const id = `s_${Date.now()}`;
  writeServices([...items, { ...s, id }]);
}

export function updateService(id: string, patch: Partial<ServiceItem>) {
  writeServices(readServices().map((s) => (s.id === id ? { ...s, ...patch } : s)));
}

export function deleteService(id: string) {
  writeServices(readServices().filter((s) => s.id !== id));
}

export function resetServices() {
  writeServices(DEFAULT_SERVICES);
}

export function useServices(): ServiceItem[] {
  const subscribe = (cb: () => void) => {
    listeners.add(cb);
    return () => {
      listeners.delete(cb);
    };
  };
  const get = () => readServices();
  const getServer = () => DEFAULT_SERVICES;
  return useSyncExternalStore(subscribe, get, getServer);
}
