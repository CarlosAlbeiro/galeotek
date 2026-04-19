import {
  Brain,
  Camera,
  Code2,
  Cpu,
  Globe,
  HardDrive,
  Lightbulb,
  Network,
  Server,
  Shield,
  Wifi,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Brain,
  Camera,
  Code2,
  Cpu,
  Globe,
  HardDrive,
  Lightbulb,
  Network,
  Server,
  Shield,
  Wifi,
  Wrench,
  Zap,
};

export const ICON_NAMES = Object.keys(ICONS);

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICONS[name] ?? Cpu;
  return <Icon className={className} />;
}
