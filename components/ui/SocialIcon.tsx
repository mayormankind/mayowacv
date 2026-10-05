import { Github, Instagram, Linkedin } from "lucide-react";
import XLogo from "@/components/ui/XLogo";
import type { SocialId } from "@/lib/data";

const iconMap: Record<SocialId, React.ElementType> = {
  linkedin: Linkedin,
  x: XLogo,
  github: Github,
  instagram: Instagram,
};

export default function SocialIcon({
  id,
  size = 18,
  className,
}: {
  id: SocialId;
  size?: number;
  className?: string;
}) {
  const Icon = iconMap[id];
  return <Icon size={size} className={className} aria-hidden="true" />;
}
