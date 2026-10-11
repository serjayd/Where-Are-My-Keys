import { ModeToggle } from "@/components/shared/ModeToggle";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Link from "next/link";

export default function HeaderCTA() {
  return (
    <div className="hidden lg:inline-flex gap-2">
      <Button size="lg" asChild>
        <Link href="#trailer">
          <Play /> Trailer
        </Link>
      </Button>
      <ModeToggle />
    </div>
  );
}
