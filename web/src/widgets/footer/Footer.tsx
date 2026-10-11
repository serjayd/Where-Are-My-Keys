import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";

import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { FOOTER_DATA } from "@/config/footer.data";
import Container from "@/components/shared/Container";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-primary-foreground">
      <Container className="py-8 lg:py-12">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <div className="flex flex-col items-start">
            <Logo />

            <p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">
              Discover the story, meet the cast, and explore everything behind
              the scenes. Your journey starts here.
            </p>

            <Button className="mt-4" size="lg" asChild>
              <Link href="/#trailer">
                <Play className="size-4 fill-current" />
                Watch the trailer
                <ArrowUpRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 sm:gap-12">
            {FOOTER_DATA.map((section) => (
              <div key={section.title}>
                <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                  {section.title}
                </h2>

                <ul className="flex flex-col items-start gap-3.5">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                        <ArrowUpRight className="size-3.5 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="my-8 h-px bg-border lg:my-12" />

        <div className="mt-10 flex flex-col gap-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 All rights reserved.</p>

          <Link
            href="/"
            className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
          >
            Back to top
            <ArrowUpRight className="-rotate-45 size-3.5" />
          </Link>
        </div>
      </Container>
    </footer>
  );
}
