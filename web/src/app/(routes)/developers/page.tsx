import Container from "@/components/shared/Container";
import PageHeading from "@/components/shared/PageHeading";
import Developers from "@/pages/developers/Developers";

export default function DevelopersPage() {
  return (
    <Container className="pt-32 lg:pt-48 pb-16">
      <PageHeading title="Secrets" titleHighlighted="Held by." />
      <Developers />
    </Container>
  );
}
