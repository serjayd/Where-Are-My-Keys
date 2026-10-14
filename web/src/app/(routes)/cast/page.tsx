import Container from "@/components/shared/Container";
import PageHeading from "@/components/shared/PageHeading";
import Members from "@/pages/cast/Members";

export default function CastPage() {
  return (
    <Container className="pt-32 lg:pt-48 pb-16">
      <PageHeading title="The ones who" titleHighlighted="Live here." />
      <Members />
    </Container>
  );
}
