import Container from "@/components/shared/Container";
import Logo from "@/components/shared/Logo";

import Navbar from "./Navbar";
import HeaderCTA from "./HeaderCTA";
import HeaderMobile from "./HeaderMobile";

export default function Header() {
  return (
    <header className="bg-background border-b border-border">
      <Container>
        <div className="h-24 flex items-center justify-between gap-8">
          <Logo />
          <Navbar />
          <HeaderCTA />
          <HeaderMobile />
        </div>
      </Container>
    </header>
  );
}
