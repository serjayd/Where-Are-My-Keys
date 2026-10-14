import Container from "@/components/shared/Container";
import PageHeading from "@/components/shared/PageHeading";
import FAQList from "../../../pages/faq/FAQList";

export default function FAQPage() {
  return (
    <Container className="pt-32 lg:pt-48 pb-16">
      <PageHeading title="Before you" titleHighlighted="Knock." />
      <FAQList />
    </Container>
  );
}
