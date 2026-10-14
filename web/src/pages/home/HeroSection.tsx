import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Play } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex items-center min-h-screen w-full overflow-hidden bg-[url('/hero-bg.png')] bg-cover bg-center bg-no-repeat">
      {/* Background overlays */}
      <div className="absolute inset-0 bg-linear-to-b from-background/50 via-background/15 to-background" />
      <div className="absolute inset-0 bg-linear-to-r from-background/80 via-background/20 to-transparent" />

      <Container className="relative z-10 w-full">
        <div className="mb-4 flex items-center gap-4">
          <span className="h-px w-8 bg-primary" />

          <span className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            An independent short film
          </span>
        </div>

        <h1 className="font-serif font-semibold tracking-tight text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-4">
          Where are <span className="italic text-primary">my keys?</span>
        </h1>
        <div className="space-y-4 text-base sm:text-lg mb-8">
          <span className="text-primary block tracking-widest font-medium font-mono">
            Two friends. One house. No way out.
          </span>
          <p className="text-muted-foreground">
            Some things are right where you left them. <br /> Others have a
            story of their own.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <Button
            size="lg"
            className="group px-8 py-5 font-mono transition-all duration-300 hover:brightness-110"
            asChild
          >
            <Link href="#trailer">
              <Play />
              Watch Trailer
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="group px-8 py-5 font-mono hover:border-primary hover:bg-primary/5 hover:text-primary"
            asChild
          >
            <Link href="/story">
              Uncover the Story
              <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
