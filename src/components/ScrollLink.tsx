"use client";

import { useRouter, usePathname } from "next/navigation";

interface ScrollLinkProps {
  targetId: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * Scrolls smoothly to a same-page anchor.
 * If we're on a different page, navigates home first then scrolls after load.
 */
export default function ScrollLink({ targetId, className, children }: ScrollLinkProps) {
  const router = useRouter();
  const pathname = usePathname();

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();

    if (pathname === "/") {
      // Already on home — just scroll
      const el = document.getElementById(targetId);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // Navigate home, then scroll once the page loads
      router.push(`/#${targetId}`);
    }
  }

  return (
    <a href={`/#${targetId}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
