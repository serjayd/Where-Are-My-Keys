import Container from "@/components/shared/Container";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function StorySection() {
  return (
    <section className="py-16">
      <Container>
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
          <h2 className="font-serif text-4xl leading-[0.95] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Somebody has been
            <br />
            <span className="italic text-primary">tidying up.</span>
          </h2>
          <div className="max-w-xl">
            <h3 className="mb-4 font-serif text-2xl font-medium sm:text-3xl">
              Leo lives alone. Or at least, he thinks he does.
            </h3>

            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              Behind every clean counter, every recovered sock and every
              mysteriously misplaced key is Theo — a Domovyk, the unseen
              guardian of the home.
            </p>

            <Link
              href="/story"
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary transition-colors hover:text-foreground"
            >
              Discover their story
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
        <div className="group relative mt-12 overflow-hidden rounded-xl border border-warm-black/10 sm:mt-20">
          <div className="relative aspect-video w-full sm:aspect-21/9">
            <Image
              src="/story-banner.png"
              alt="A glimpse into Leo's mysterious home"
              fill
              className="object-cover object-center transition-transform duration-700 ease-out rounded-xl group-hover:scale-[1.03]"
              priority={false}
            />

            <div className="absolute inset-0 bg-linear-to-t from-warm-black/70 via-transparent to-warm-black/10" />

            <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8">
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.3em] text-primary sm:text-xs">
                  The world of the film
                </p>
                <p className="font-serif text-xl italic text-foreground sm:text-3xl">
                  Not everything is as it seems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
