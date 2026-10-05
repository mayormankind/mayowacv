import { Mail, MessageCircle, Phone } from "lucide-react";
import SocialIcon from "@/components/ui/SocialIcon";
import { socials } from "@/lib/data";
import { SITE } from "@/lib/site-config";

export function ContactIntro() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <span className="h-px w-8 bg-primary shrink-0" aria-hidden="true" />
        <span className="text-primary-soft text-xs font-bold uppercase tracking-[0.25em]">
          Contact
        </span>
      </div>

      {/* [OWNER] confirm availability — remove this line if it can&apos;t be kept current */}
      <p className="flex items-center gap-2.5 text-sm font-semibold text-white/75">
        <span className="h-2 w-2 rounded-full bg-green-500" aria-hidden="true" />
        Available for new projects
      </p>

      <div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-[-0.03em] text-balance leading-[1.05] mb-5">
          Tell me what you&apos;re <span className="text-primary">building</span>.
        </h1>
        <p className="text-base text-white/70 leading-relaxed max-w-sm text-pretty">
          Open to contracts, full-time roles, and interesting projects. If you
          have a problem worth solving, reach out.
        </p>
      </div>
    </div>
  );
}

export function ContactDetails() {
  return (
    <div className="flex flex-col gap-10">
      <div className="space-y-3">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/60">
          Direct
        </p>
        <a
          href={`mailto:${SITE.email}`}
          className="flex items-center gap-3 text-white/65 hover:text-white transition-colors"
        >
          <Mail className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
          <span className="text-base font-semibold">{SITE.email}</span>
        </a>
        <a
          href={`tel:${SITE.phoneHref}`}
          className="flex items-center gap-3 text-white/65 hover:text-white transition-colors"
        >
          <Phone className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
          <span className="text-base font-semibold">{SITE.phone}</span>
        </a>
        <a
          href={SITE.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp (opens in a new tab)"
          className="flex items-center gap-3 text-white/65 hover:text-white transition-colors"
        >
          <MessageCircle className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
          <span className="text-base font-semibold">WhatsApp</span>
        </a>
      </div>

      <div className="space-y-3">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/60">
          Find me online
        </p>
        <div className="flex items-center gap-2">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.ref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${social.label} (opens in a new tab)`}
              className="p-3 text-white/55 hover:text-white transition-colors"
            >
              <SocialIcon id={social.id} size={20} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
