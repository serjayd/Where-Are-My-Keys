import GameButton from "./GameButton";

export default function GameConrols() {
  return (
    <section>
      <div className="flex items-center justify-between">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-8 bg-primary" />
          <span className="text-xs uppercase tracking-[0.3em] text-primary">
            The Hallway
          </span>
        </div>
        <GameButton />
      </div>
    </section>
  );
}
