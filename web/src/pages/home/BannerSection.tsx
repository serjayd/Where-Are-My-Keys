export default function BannerSection() {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="mx-auto max-w-3xl px-6 text-center sm:px-10">
        <div className="mb-10 flex items-center justify-center gap-4 sm:mb-14">
          <span className="h-px w-8 bg-primary" />
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-primary">
            A question from the dark
          </p>
          <span className="h-px w-8 bg-primary" />
        </div>

        <h2 className="font-serif text-5xl leading-[1.05] tracking-tight sm:text-7xl md:text-8xl lg:text-[7rem]">
          &ldquo;What if we
          <span className="mt-2 block italic text-primary sm:mt-4">
            aren&apos;t alone?&rdquo;
          </span>
        </h2>

        <div className="mx-auto mt-8 max-w-lg">
          <p className="text-base leading-8 text-muted-foreground sm:text-lg">
            Not all hauntings are frightening.
            <span className="mt-1 block font-serif text-xl italic text-foreground sm:text-2xl">
              Some of them wash your dishes.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
