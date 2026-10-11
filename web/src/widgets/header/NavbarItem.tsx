"use client";

import { cn } from "cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  item: {
    label: string;
    href: string;
  };
}

export default function NavbarItem({ item }: Props) {
  const { href, label } = item;
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex py-px text-sm font-medium transition-colors duration-200",
        isActive
          ? "text-primary"
          : "text-muted-foreground hover:text-foreground",
      )}
    >
      {label}

      <span
        className={cn(
          "absolute -bottom-0.5 left-0 h-px w-full origin-left bg-primary transition-transform duration-300 ease-out",
          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
        )}
      />
    </Link>
  );
}
