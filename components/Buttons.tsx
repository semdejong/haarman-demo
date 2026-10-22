import type { ReactNode } from "react";
import Link from "next/link";
import { phone } from "@/lib/site";

const base = "inline-flex min-h-11 items-center justify-center text-center font-display font-semibold transition-colors";
const roomy = "px-5 text-base uppercase tracking-wide";
const compactSize = "px-2 text-[13px] leading-tight tracking-normal";

export function OfferteLink({
  children = "Vrijblijvende werkopname",
  variant = "solid",
  compact = false,
  className = "",
}: {
  children?: ReactNode;
  variant?: "solid" | "ghost" | "light";
  compact?: boolean;
  className?: string;
}) {
  const styles = {
    solid: "bg-brand text-white hover:bg-brand-deep",
    ghost: "border border-brand bg-transparent text-brand hover:bg-brand hover:text-white",
    light: "bg-white text-brand hover:bg-paper",
  }[variant];

  return (
    <Link href="/werkopname" data-cta="offerte" className={`${base} ${compact ? compactSize : roomy} ${styles} ${className}`}>
      {children}
    </Link>
  );
}

export function PhoneLink({
  children,
  variant = "ghost",
  compact = false,
  className = "",
}: {
  children?: ReactNode;
  variant?: "solid" | "ghost" | "light" | "text";
  compact?: boolean;
  className?: string;
}) {
  const styles = {
    solid: "bg-brand text-white hover:bg-brand-deep",
    ghost: "border border-ink/20 bg-transparent text-ink hover:border-brand hover:text-brand",
    light: "border border-white/40 text-white hover:bg-white hover:text-brand",
    text: "text-brand hover:text-brand-deep",
  }[variant];
  const size = variant === "text" ? "px-2 text-lg" : compact ? compactSize : roomy;

  return (
    <a href={phone.href} className={`${base} ${size} ${styles} ${className}`}>
      {children ?? `Bel ${phone.display}`}
    </a>
  );
}
