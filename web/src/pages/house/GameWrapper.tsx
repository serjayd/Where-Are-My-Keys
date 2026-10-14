"use client";

import GameBackground from "./GameBackground";
import GameConrols from "./GameConrols";

export default function GameWrapper() {
  return (
    <div className="flex flex-col gap-6">
      <GameConrols />
      <section className="relative aspect-video w-full overflow-hidden rounded-xl">
        <GameBackground />
      </section>
    </div>
  );
}
