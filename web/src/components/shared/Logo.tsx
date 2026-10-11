import { Key } from "lucide-react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-primary">
      <Key className="size-7" />
      <span className="font-mono text-sm font-semibold uppercase">
        Where are <br /> my keys?
      </span>
    </Link>
  );
}
