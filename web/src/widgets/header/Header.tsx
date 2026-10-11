import Container from "@/components/shared/Container";
import Logo from "@/components/shared/Logo";

import Navbar from "./Navbar";

import HeaderMobile from "./HeaderMobile";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Play } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-primary-foreground/80 border-b border-border backdrop-blur-md">
      <Container>
        <div className="h-24 flex items-center justify-between gap-8">
          <Logo />
          <Navbar />
          <Button size="lg" className="hidden lg:flex" asChild>
            <Link href="#trailer">
              <Play /> Trailer
            </Link>
          </Button>
          <HeaderMobile />
        </div>
      </Container>
    </header>
  );
}
